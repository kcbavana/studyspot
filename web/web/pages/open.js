const openai = require('openai');
openai.api_key = process.env.OPEN_API;;

const question = "What is the capital of France?";
const model_engine = "text-davinci-002";

openai.Completion.create({
  engine: model_engine,
  prompt: question,
  max_tokens: 100,
  n: 1,
  stop: null,
  temperature: 0.7,
}).then((response) => {
  const answer = response.choices[0].text.trim();
  console.log(answer);
}).catch((error) => {
  console.error(error);
});