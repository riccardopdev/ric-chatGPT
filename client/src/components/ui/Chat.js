import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [prompt, setPrompt] = useState('');
    const [completion, setCompletion] = useState('');

    //TODO Dynamically set the endpoint depending on dev or production environment
    const requestEndPoint = 'http://localhost:5000/api/openai';

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(requestEndPoint, {
                prompt
            });
            //TODO handle possible different response structure
            setCompletion(response.data[0].text);
            setPrompt('');
        } catch (error) {
            //TODO Handle error
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button type="submit">Ask me a question</button>
            <p>{completion}</p>
        </form>
    );
}

export default Chat;