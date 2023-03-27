const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

const EMBEDDING_MODEL = process.env.OPENAI_EMBEDDINGS_MODEL;

//This function is responsible for requesting embeddings values for the original user question (inputText) and then return both the question's text and its embeddings values
const createEmbeddings = async (inputText) => {
    const response = await openai.createEmbedding({
        input: inputText,
        model: EMBEDDING_MODEL
    });

    const embeddingOutput = {
        text: inputText,
        embedding: response.data.data[0].embedding
    };

    return embeddingOutput;
}

module.exports = createEmbeddings;