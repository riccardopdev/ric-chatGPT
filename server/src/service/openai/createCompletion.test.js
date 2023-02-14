import { it, expect, vi } from 'vitest';
import createCompletion from './createCompletion';
import { OpenAIApi } from 'openai';

it('should call openai.createCompletion once', async () => {
    const openaiCreateCompletionSpy = vi.spyOn(OpenAIApi.prototype, 'createCompletion');

    openaiCreateCompletionSpy.mockImplementation(() => Promise.resolve({}));

    await createCompletion('Test');

    expect(openaiCreateCompletionSpy).toHaveBeenCalledOnce();

    openaiCreateCompletionSpy.mockRestore();
});

it('should call openai.createCompletion and return an object', async () => {
    const openaiCreateCompletionSpy = vi.spyOn(OpenAIApi.prototype, 'createCompletion');

    openaiCreateCompletionSpy.mockImplementation(() => Promise.resolve({}));

    const response = await createCompletion('Test');

    expect(response).toBeTypeOf('object');

    openaiCreateCompletionSpy.mockRestore();
});