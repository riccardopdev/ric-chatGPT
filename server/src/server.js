const results = require('dotenv').config();

if(results.error) {
    throw results.error;
}

const express = require('express');
const app = express();
const createCompletion = require('./service/openai/createCompletion');

const PORT = process.env.PORT_NUMBER || 8000;

async function startServer() {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });

    const prompt = 'Tell me about your work experience.';

    // const response = await createCompletion(prompt);
    // console.log(response.data.choices);
}

startServer();