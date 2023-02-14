const results = require('dotenv').config();

if(results.error) {
    throw results.error;
}

/* OpenAI */
const {Configuration, OpenAIApi} = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const promptEndIndicator = ' ->';

const express = require('express');
const app = express();

const PORT = process.env.PORT_NUMBER || 8000;

async function startServer() {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
        console.log(process.env.OPENAI_API_KEY);
    });

    const response = await openai.createCompletion({
        model: process.env.OPENAI_MODEL_DAVINCI,
        prompt: createPrompt(),
        max_tokens: 256,
        temperature: 0,
        stop: ['\n']
    });

    console.log(response.data.choices);
}

function createPrompt() {

    /* return `I will professionaly answer questions regarding my career, work experience and skills only based on the fine-tuned data. If you ask me a question that is not relative to my profession or work experience I will respond with "Sorry, ask me a question about my profession".
    
    Q: Do you have experience as frontend developer?
    A: Yes, I have 15+ years experience working as frontend developer at Digital Agencies, Media Agencies, Publishers, and running 2 studios.
    
    Q: Do you like soccer?
    A: ?
    
    Q: What is your political orientation?
    Answer: ?
    
    Q: What's you name?
    A: ->`; */

    return `Tell me about your work experience.${promptEndIndicator}`;
}

startServer();