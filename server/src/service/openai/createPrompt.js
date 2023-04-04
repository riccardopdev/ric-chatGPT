/*This function take the original prompt, adds the end indicator ' ->', and returns the updated prompt.
This is necessary for the openai model to understand when the prompt ends and it should start generating the completion*/
function createPrompt(contextResponse, prompt) {
    const promptEndIndicator = ' ->';
    let finalPrompt = '';

    if(contextResponse !== 'undefined' && contextResponse !== null && contextResponse.similarityScore > 0.65) {
        finalPrompt = `Answer the question as truthfully as possible based on the context, and if you're unsure of the answer, say "Sorry, I don't know".
        Context:  ${contextResponse.text}
        Q: ${prompt}
        A:${promptEndIndicator}`;
    } else {
        finalPrompt =`Answer the question as truthfully as possible, and if you're unsure of the answer, say "Sorry, I don't know".
        Q: ${prompt}
        A:${promptEndIndicator}`;
    }

    return finalPrompt;
}

module.exports = createPrompt;