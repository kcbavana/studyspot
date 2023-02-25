import AWS from 'aws-sdk'
import clientPromise from "/lib/mongodb"
import { v4 as uuidv4 } from 'uuid';

const S3_BUCKET = process.env.SP_AWS_UPLOAD_BUCKET;
const REGION = process.env.SP_AWS_REGION;
const URL_EXPIRATION_TIME = 300; // in seconds
AWS.config.update({ signatureVersion: 'v4' })

const rubricBucket = new AWS.S3({
    accessKeyId: process.env.SP_AWS_ACCESS_ID,
    secretAccessKey: process.env.SP_AWS_ACCESS_KEY,
    params: { Bucket: process.env.SP_AWS_RUBRIC_BUCKET },
    region: REGION,
})

const gradeBucket = new AWS.S3({
    accessKeyId: process.env.SP_AWS_ACCESS_ID,
    secretAccessKey: process.env.SP_AWS_ACCESS_KEY,
    params: { Bucket: process.env.SP_AWS_GRADE_BUCKET },
    region: REGION,
})


function generatePreSignedPutUrl(bucket, key, fileType) {
    let result = bucket.getSignedUrlPromise('putObject', {
        Key: key,
        ContentType: fileType,
        Expires: URL_EXPIRATION_TIME,
    }).then((url) => {
        return url
    })
    return result
}

/**
 * Return a uuid to store the object in s3 under while also keeping track of who owns the object
 * **/
async function generateRecord(cookie_id) {
    const client = await clientPromise;
    const db = client.db("data");
    let owner = cookie_id
    let uuid = uuidv4();

    let uploads = db.collection("UserUploads");
    const documentsCollection = db.collection('GradedDocuments');
    const record = { userid: owner };

    uploads.findOne(record, (err, result) => {
        if (err) {
            console.log(err);
        } else if (!result) {
            uploads.insertOne(record, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Paper added");
                }
            });
            uploads.updateOne(
                record,
                { $set: { "uploads": [{ uuid, status: 'Not Ready' }] } },
                { upsert: true }
            );
            documentsCollection.insertOne({ _id: uuid, owner, status: 'Not Ready', summary: [] });
        } else {
            console.log("Record already exists:", result);
            var currentData = uploads.count({ 'userid': owner }, { limit: 1 })
            if (currentData && currentData.uploads) {
                while (currentData.uploads.includes(uuid)) {
                    uuid = uuidv4();
                }
            }
            uploads.update(record, {
                $push: { "uploads": { uuid, status: 'Not Ready' } }
            })
            documentsCollection.insertOne({ _id: uuid, owner, status: 'Not Ready', summary: [] });
        }
    });
    let fullyQualifiedName = uuid;
    return fullyQualifiedName
}

export default async (req, res) => {
    let user_id = 211
    const body = req.body;
    // Signed in
    if (req.method == 'POST') {
        //First, validate the data and send back an error message if data is invalid
        if (body["fileName"] == null) {
            res.status(400)
            res.json({ "Error": "Please add a filename" })
        } else if (body["fileType"] !== "application/pdf") {
            res.status(400)
            res.json({ "Error": "Please only upload pdf files" })
        } else {
            //S3
            let fullyQualifiedName = await generateRecord(user_id)
            let signedURLS = {
                rubricURL: "",
                documentURL: "",
            }
            await generatePreSignedPutUrl(rubricBucket ,fullyQualifiedName, "application/pdf").then((url) => {
                signedURLS.rubricURL = url
            })
            await generatePreSignedPutUrl(gradeBucket, fullyQualifiedName, "application/pdf").then((url) => {
                signedURLS.documentURL = url
            })

            res.status(200)
            res.json({ "signedURLS": signedURLS, 'fileName': fullyQualifiedName })
        }
    } else {
        res.status(400)
        res.json({ "Error": "This endpoint only accepts POST" })
    }
    res.end()
}