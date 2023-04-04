const express = require('express');
const openaiRouter = express.Router();

const createCompletion = require('../../service/openai/createCompletion');
const createEmbeddings = require('../../service/openai/createEmbeddings');
const getSimilarityContext = require('../../util/getSimilarityContext');

openaiRouter.get('/', async (req, res) => {
    //Return status code 405 = Method Not Allowed
    return res.status(405).json({message: 'You need to implement a post request to the api/openai endpoint. The post request must include a body prompt parameter.'});
});

openaiRouter.post('/', async (req, res) => {
    //Retrieve the prompt parameter from the request body
    let prompt = req.body.prompt; //Contains the question from the user
    let embeddingResponse; //Will store the embeddings value for the user's question
    let contextResponse; //Will store the context to be used for the completion request to OpenAI API
    let completionResponse; //Will store the completion response from OpenAI API

    //Check if they body request contains a prompt parameter
    if(prompt === undefined || prompt === null) {
        return res.status(400).json({error: 'The request body must have a prompt parameter.'});
    }

    //Check that the prompt parameter is a string
    if(typeof prompt !== 'string') {
        return res.status(400).json({error: 'The request body must have a prompt parameter of type "string".'});
    }

    //Request embedding for the prompt through the OpenAI API
    try {
        prompt = prompt.toString();
        prompt = prompt.trim();

        embeddingResponse = await createEmbeddings(prompt);
    } catch (error) {
        console.log('Error while requesting prompt embedding through OpenAI API.');
        console.log(error);

        const statusNum = error.response.status ? error.response.status : 400;

        return res.status(statusNum).json({message: 'Error while requesting prompt embedding through OpenAI API', error: error});
    }

    //Do a comparison between the question and original data embedding values and return the closest context and similarity score
    try {
        contextResponse = await getSimilarityContext(embeddingResponse);
    } catch (error) {
        console.log('Error while requesting context similarity comparison.');
        console.log(error);

        return res.status(400).json({message: 'Error while requesting context similarity comparison.', error: error});
    }

    //Request a completion to the OpenAI API and provide the context for prompt engineering
    try {
        completionResponse = await createCompletion(contextResponse, prompt);

        return res.status(200).json({
            success: true,
            message: completionResponse.data.choices[0].text
        });
    } catch (error) {
        console.log('Error while requesting completion through OpenAI API.');
        console.log(error);

        return res.status(400).json({message: 'Error while requesting completion through OpenAI API.', error: error});
    }
});

module.exports = openaiRouter;