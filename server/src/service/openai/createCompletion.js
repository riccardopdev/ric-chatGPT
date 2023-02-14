const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const createPrompt = require('./createPrompt');

const createCompletion = async (prompt) => {
    let promptResult;

    try { 
            promptResult = createPrompt(prompt);
        } catch (error) {
            return error;
    }

    const response = await openai.createCompletion({
        model: process.env.OPENAI_MODEL_DAVINCI,
        prompt: promptResult,
        max_tokens: 256,
        temperature: 0,
        stop: ['\n']
    });

    return response;
};

module.exports = createCompletion;