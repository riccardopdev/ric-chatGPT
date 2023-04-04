import { it, expect } from 'vitest';
import createPrompt from './createPrompt';

const firstParameterHighEnough = {text: 'some text', similarityScore: 0.66};
const firstParameterNull = null;
const firstParameterUndefined = 'undefined';
const firstParameterTooLow = {text: 'some text', similarityScore: 0.65};

const secondParameter = 'prompt';

it('should return a string when the first parameter is not null, defined, and has a property of similarityScore > 0.65', () => {
    const promptResult = createPrompt(firstParameterHighEnough, secondParameter);

    expect(promptResult).toBeTypeOf('string');
});

it('should return a string when the first parameter is either null, undefined, or has a property of similarityScore < 0.65', () => {
    const promptResultNull = createPrompt(firstParameterNull, secondParameter);
    const promptResultUndefined = createPrompt(firstParameterUndefined, secondParameter);
    const promptResultTooLow = createPrompt(firstParameterTooLow, secondParameter);

    expect(promptResultNull).toBeTypeOf('string');
    expect(promptResultUndefined).toBeTypeOf('string');
    expect(promptResultTooLow).toBeTypeOf('string');
});

it('should return a string containing the text "Context: ", followed by the value of the first parameter\'s property "text", if the first parameter is not null, defined, and has a property of similarityScore > 0.65', () => {
    const expectedSubstring = `Context: ${firstParameterHighEnough.text}`;

    const promptResult = createPrompt(firstParameterHighEnough, secondParameter);

    expect(promptResult).contain(expectedSubstring);
});

it('should return a string without the substring "Context:", when the first parameter is either null, undefined, or has a property of similarityScore < 0.65', () => {
    const unexpectedSubstring = 'Context:';

    const promptResultNull = createPrompt(firstParameterNull, secondParameter);
    const promptResultUndefined = createPrompt(firstParameterUndefined, secondParameter);
    const promptResultTooLow = createPrompt(firstParameterTooLow, secondParameter);

    expect(promptResultNull).not.contain(unexpectedSubstring);
    expect(promptResultUndefined).not.contain(unexpectedSubstring);
    expect(promptResultTooLow).not.contain(unexpectedSubstring);
});

it('should return a string containg the substring "Q: " followed by the text value of the second parameter, and the substring "A:" followed by the end indicator " ->"', () => {
    const endIndicator = ' ->';
    const expectedSubstring1 = `Q: ${secondParameter}`;
    const expectedSubstring2 = `A:${endIndicator}`;

    const promptResultHighEnough = createPrompt(firstParameterHighEnough, secondParameter);
    const promptResultNull = createPrompt(firstParameterNull, secondParameter);
    const promptResultUndefined = createPrompt(firstParameterUndefined, secondParameter);
    const promptResultTooLow = createPrompt(firstParameterTooLow, secondParameter);
    

    expect(promptResultHighEnough).contains(expectedSubstring1).and.contains(expectedSubstring2);
    expect(promptResultNull).contains(expectedSubstring1).and.contains(expectedSubstring2);
    expect(promptResultUndefined).contains(expectedSubstring1).and.contains(expectedSubstring2);
    expect(promptResultTooLow).contains(expectedSubstring1).and.contains(expectedSubstring2);
});