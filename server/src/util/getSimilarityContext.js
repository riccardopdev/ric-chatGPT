//This module's function takes an object parameter which has a text property containing the string value of the user's question and an embedding property containing the embeddings values for that text
//It then compares the embeddings values of the question to the embeddings values of every item in a .json file using the cosine similarity function
//If a similarity is found the item's text from the .json file is returned as the "context" for the question to be submitted to openai completion API
//If not similarity is found null is returned instead of the context
const loadJSONFile = require('./loadJSONFile');
const cosineSimilarity = require('./cosineSimilarity');

const jsonFilePath = __dirname + '../../data/contextEmbeddings.json'; //.json file with original context and embeddings values
const contextValues = {text: '', similarity: 0} //Object to hold initial context values

const getSimilarityContext = async (questionEmbeddingValues) => {
    const contextEmbeddingValues = await loadJSONFile(jsonFilePath);

    //Reset the context values
    contextValues.text = '';
    contextValues.similarity = 0;

    //For each item in the contextEmbeddingValues object we do a similarity check against the questionEmbeddingValues
    Object.keys(contextEmbeddingValues).forEach((item) => {
        let similarity = cosineSimilarity(contextEmbeddingValues[item].embedding, questionEmbeddingValues.embedding);

        if(similarity > contextValues.similarity) {
            contextValues.similarity = similarity;
            contextValues.text = contextEmbeddingValues[item].text;
        }
    });

    return contextValues;
}

module.exports = getSimilarityContext;