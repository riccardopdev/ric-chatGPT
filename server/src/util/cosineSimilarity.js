//This function implement a cosine similarity comparison between the values of two vectors and return a number between 0 (not similar) and 1 (very similar)
//Cosine Similarity Infor: https://en.wikipedia.org/wiki/Cosine_similarity?utm_source=frontendfresh&utm_medium=email&utm_campaign=customizing-an-openai-chatbot-with-embeddings

const cosineSimilarity = (vecA, vecB) => {
    const dotProduct = vecA.reduce((acc, val, i) => acc + val * vecB[i], 0);
    const magnitudeA = Math.sqrt(vecA.reduce((acc, val) => acc + val ** 2, 0));
    const magnitudeB = Math.sqrt(vecB.reduce((acc, val) => acc + val ** 2, 0));

    return dotProduct/(magnitudeA * magnitudeB);
}

module.exports = cosineSimilarity;