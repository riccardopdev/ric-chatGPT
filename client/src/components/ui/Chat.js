import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [prompt, setPrompt] = useState('');
    const [completion, setCompletion] = useState('');

    //TODO Dynamically set the endpoint depending on dev or production environment
    const requestEndPoint = 'http://localhost:5000/api/openai';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errorMessage = 'Sorry, it seems that I am having some issues forwarding your request. Would you like to try again shortly?';

        setCompletion('');

        try {
            const response = await axios.post(requestEndPoint, {prompt});
            setCompletion(response.data[0].text);
        } catch (error) {
            console.log(error);
            setCompletion(errorMessage);
        }

        setPrompt('');
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