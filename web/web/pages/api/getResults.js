import clientPromise from "/lib/mongodb";

export default async function getResults(req, res) {
  const body = req.body;
  if (req.method == "POST") {
    const engineeredPrompt =
      'Give a grade (A,B,C,D) for the following assignment: "' +
      body.assignment +
      '" according to this rubric: "' +
      body.rubric +
      '". Also provide some justification for the given grade. Offer some ways to improve the assignment. Put a linebreak between the grade, justification, and advice sections';
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPEN_API}`, // Replace with your API key or token
    };

    const apiBody = {
      model: "text-davinci-003",
      prompt: engineeredPrompt,
      temperature: 0.9,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    };

    // Send the API request
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers,
      body: JSON.stringify(apiBody),
    });

    // Get the response data and send it back to the client
    const responseData = await response.json();
    res.status(200).json(responseData);
  } else {
    res.status(400);
    res.json({ Error: "This endpoint only accepts POST" });
  }
  res.end();
}
