import { it, expect, vi } from 'vitest';
import createEmbeddings from './createEmbeddings';
import { OpenAIApi } from 'openai';

it('should call openai.createEmbedding once', async () => {
    const openaiCreateEmbeddingSpy = vi.spyOn(OpenAIApi.prototype, 'createEmbedding');

    //The response is expecting an object with a data property containing another data property
    openaiCreateEmbeddingSpy.mockImplementation(() => Promise.resolve({
        text: 'text',
        data: {
            data: [[1000]]
        }
    }));

    await createEmbeddings('text');

    expect(openaiCreateEmbeddingSpy).toHaveBeenCalledOnce();

    openaiCreateEmbeddingSpy.mockRestore();
});

it('should call openai.createEmbedding and return an object', async () => {
    const openaiCreateEmbeddingSpy = vi.spyOn(OpenAIApi.prototype, 'createEmbedding');

    //The response is expecting an object with a data property containing another data property
    openaiCreateEmbeddingSpy.mockImplementation(() => Promise.resolve({
        text: 'text',
        data: {
            data: [[1000]]
        }
    }));

    const response = await createEmbeddings('text');

    expect(response).toBeTypeOf('object');

    openaiCreateEmbeddingSpy.mockRestore();
});