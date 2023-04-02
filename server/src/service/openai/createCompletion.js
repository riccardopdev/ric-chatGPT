const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const createPrompt = require('./createPrompt');

//This function is responsible to make the createCompletion request to the openai API endpoint
const createCompletion = async (contextResponse, prompt) => {

    const response = await openai.createCompletion({
        model: process.env.OPENAI_MODEL_DAVINCI,
        prompt: createPrompt(contextResponse, prompt),
        max_tokens: 256,
        temperature: 0,
        stop: ['\n']
    });

    return response;
};

module.exports = createCompletion;