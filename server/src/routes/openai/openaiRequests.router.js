const express = require('express');
const openaiRouter = express.Router();

const createCompletion = require('../../service/openai/createCompletion');

openaiRouter.get('/', async (req, res) => {
    return res.status(200).json({message: 'get method for api/openai endpoint'});
});

openaiRouter.post('/', async (req, res) => {
    //Retrieve the prompt parameter from the request body
    const prompt = req.body.prompt || 'Tell me about your work experience.';

    //Make the request to openai
    const response = await createCompletion(prompt);

    if(response instanceof Error) {
        console.log(`Error: ${response.message}`);
        res.status(400).json({error: response.message});
    } else {
        console.log(response.data.choices);
        res.status(200).json(response.data.choices);
    }
});

module.exports = openaiRouter;