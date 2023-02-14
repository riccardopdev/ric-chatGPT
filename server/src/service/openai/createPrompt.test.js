import { it, expect } from 'vitest';
import createPrompt from './createPrompt';

it('should return a string', () => {
    const promptResult = createPrompt('test');

    expect(promptResult).toBeTypeOf('string');
});

it('should return a string containg the end indicator " ->"', () => {
    const promptResult = createPrompt('test');
    const endIndicator = ' ->';

    expect(promptResult).contains(endIndicator);
});

it('should throw an error if nothing is passed into createPrompt', () => {
    const promptResultFn = () => {
        createPrompt();
    }

    expect(promptResultFn).toThrow('The orignal prompt is undefined.');
});

it('should throw an error if an empty string is passed into createPrompt', () => {
    const promptResultFn1 = () => {
        createPrompt('');
    }

    const promptResultFn2 = () => {
        createPrompt(' ');
    }

    expect(promptResultFn1).toThrow('The original prompt is an empty string.');
    expect(promptResultFn2).toThrow('The original prompt is an empty string.');
});