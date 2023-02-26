import React from "react"
import styled from "styled-components"
import Submission from "../components/submission"

const styledSubmissionContainer = styled.div`
    min-height: 300px;
`



export default function test() {
    const handleChange = async (e)=> {
        let file = e.target.files[0];
        const requestObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "fileName": file.name,
                "fileType": file.type,
            })
        }
        await fetch('/api/uploadPaper', requestObject)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        /*.then(data => {
            fetch(data["signedUrl"], {
                headers : {'content-type':file.type},
                method: 'PUT',
                body: file,
            }).then((res) => {
                return res.text()
            }).then((txt) => {
                console.log(txt)
            })
        })*/
    }

    return(
        <>
            <styledSubmissionContainer>
                <Submission/>
            </styledSubmissionContainer>
            <input type="file"
                onChange={handleChange}/>
        </>
    );
}