import { it, expect } from 'vitest';
import createPrompt from './createPrompt';

it('should return a string', () => {
    const testString = 'test';
    const promptResult = createPrompt(testString);

    expect(promptResult).toBeTypeOf('string');
});

it('should return a string containg the end indicator " ->"', () => {
    const testString = 'test';
    const promptResult = createPrompt(testString);
    const endIndicator = ' ->';

    expect(promptResult).contains(endIndicator);
});