const results = require('dotenv').config();

if(results.error) {
    throw results.error;
}

const express = require('express');
const app = express();

const PORT = process.env.PORT_NUMBER || 8000;

async function startServer() {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
        console.log(process.env.OPENAI_API_KEY);
    });
}

startServer();