//This module's function takes an object parameter which has a text property containing the string value of the user's question and an embedding property containing the embeddings values for that text
//It then compares the embeddings values of the question to the embeddings values of every item in a .json file using the cosine similarity function
//If a similarity is found the item's text from the .json file is returned as the "context" for the question to be submitted to openai completion API
//If not similarity is found null is returned instead of the context
const path = require('path');
const loadJSONFile = require('./loadJSONFile');
const cosineSimilarity = require('./cosineSimilarity');

const jsonFilePath = path.join(__dirname, '../data/contextEmbeddings.json'); //.json file with original context and embeddings values
const contextResultValues = {text: '', similarityScore: 0} //Object to hold initial context values

const getSimilarityContext = async (questionEmbeddingValues) => {
    const contextEmbeddingValues = await loadJSONFile(jsonFilePath); //Load the json file with context and embedding data

    //Reset the context values
    contextResultValues.text = '';
    contextResultValues.similarityScore = 0;

    //For each item in the contextEmbeddingValues object we do a similarity check against the questionEmbeddingValues
    Object.keys(contextEmbeddingValues).forEach((item) => {
        let similarityScore = cosineSimilarity(contextEmbeddingValues[item].embedding, questionEmbeddingValues.embedding);

        if(similarityScore > contextResultValues.similarityScore) {
            contextResultValues.similarityScore = similarityScore;
            contextResultValues.text = contextEmbeddingValues[item].text;
        }
    });

    return contextResultValues;
}

module.exports = getSimilarityContext;