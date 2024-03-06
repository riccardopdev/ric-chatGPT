const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
const createPrompt = require('./createPrompt');

//This function is responsible to make the createCompletion request to the openai API endpoint
const createCompletion = async (contextResponse, prompt) => {

  // console.log('----------- ContextResponse:', contextResponse);
  // console.log('----------- Prompt:', prompt);

  const response = await openai.createCompletion({
    model: process.env.OPENAI_MODEL_GPT_3_5_TURBO,
    prompt: createPrompt(contextResponse, prompt),
    max_tokens: 512,
    temperature: 0,
    stop: ['\n']
  });

  // console.log('---------- Response:', response.data);

  return response;
};

module.exports = createCompletion;