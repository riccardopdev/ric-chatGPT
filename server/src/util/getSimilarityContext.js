//This module's function takes an object parameter which has a text property containing the string value of the user's question and an embedding property containing the embeddings values for that text
//It then compares the embeddings values of the question to the embeddings values of every item in a .json file using the cosine similarity function
//If a similarity is found the item's text from the .json file is returned as the "context" for the question to be submitted to openai completion API
//If not similarity is found null is returned instead of the context
const loadJSONFile = require('./loadJSONFile');
const jsonFilePath = __dirname + '../../data/contextEmbeddings.json'; //.json file with original context and embeddings values

const getSimilarityContext = async (questionEmbeddingValues) => {
    const contextEmbeddingValues = await loadJSONFile(jsonFilePath);

    return questionEmbeddingValues;
}



module.exports = getSimilarityContext;