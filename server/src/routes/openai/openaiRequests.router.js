const express = require('express');
const openaiRouter = express.Router();

const createCompletion = require('../../service/openai/createCompletion');
const createEmbeddings = require('../../service/openai/createEmbeddings');

openaiRouter.get('/', async (req, res) => {
    //Return status code 405 = Method Not Allowed
    return res.status(405).json({message: 'You need to implement a post request to the api/openai endpoint. The post request must include a body prompt parameter.'});
});

openaiRouter.post('/', async (req, res) => {
    //Retrieve the prompt parameter from the request body
    let prompt = req.body.prompt;
    let completionResponse;
    let embeddingResponse;

    const replyToInvalidPrompt = 'Sorry, that didn\'t seem to work. Would you like to try again with a question regarding my work experience and career?';
    const replyToInvalidQuestion = 'Please, ask me a question regarding my work experience and career.';

    //Check if they body request contains a prompt parameter
    if(prompt === undefined || prompt === null) {
        return res.status(400).json({error: 'The request body must have a prompt parameter.'});
    }

    //Check that the prompt parameter is a string
    if(typeof prompt !== 'string') {
        return res.status(400).json({error: 'The request body must have a prompt parameter of type "string".'});
    }

    try {
        prompt = prompt.toString();
        prompt = prompt.trim();

        embeddingResponse = await createEmbeddings(prompt);
        console.log(embeddingResponse)
    } catch (error) {
        console.log('Error while requesting prompt embedding to OpenAI API');
        const statusNum = error.response.status ? error.response.status : 400;
        
        return res.status(statusNum).json({message: 'Error while requesting prompt embedding to OpenAI API', error: error});
    }

    try {
        //If the prompt is less than 10 characters, there is a possibility that is not a well formulated question
        if(prompt.length < 10) {
            completionResponse = {
                data: {
                    choices: [
                        {
                            text: replyToInvalidPrompt
                        }
                    ]
                }
            };

        } else {
            //Make the request to openai
            completionResponse = await createCompletion(prompt);

            //Check if openai responded with ' ?' which means the user might have asked an improper or not valid question
            if(completionResponse.data.choices[0].text === ' ?') completionResponse.data.choices[0].text = replyToInvalidQuestion;
        }

        return res.status(200).json({
            success: true,
            message: completionResponse.data.choices[0].text
        });
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = openaiRouter;