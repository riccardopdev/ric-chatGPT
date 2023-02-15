/*This function take the original prompt, adds the end indicator ' ->', and returns the updated prompt.
This is necessary for the openai model to understand when the prompt ends and it should start generating the completion*/
function createPrompt(prompt) {
    const promptEndIndicator = ' ->';

    return prompt + promptEndIndicator;
}

module.exports = createPrompt;