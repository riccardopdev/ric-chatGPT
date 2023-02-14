import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [prompt, setPrompt] = useState('');

    const requestEndPoint = 'http://localhost:5000/api/openai';

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(requestEndPoint, {
                prompt
            });
            console.log(response);
        } catch (error) {
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
        </form>
    );
}

export default Chat;