/*This function take the original prompt, adds the end indicator ' ->', and returns the updated prompt.
This is necessary for the openai model to understand when the prompt ends*/
function createPrompt(prompt) {
    //Validate the prompt parameter
    if(prompt === undefined) throw new Error('The orignal prompt is undefined.');
    if(prompt === '' || prompt === ' ') throw new Error('The original prompt is an empty string.');

    const promptEndIndicator = ' ->';

    return prompt + promptEndIndicator;
}

module.exports = createPrompt;