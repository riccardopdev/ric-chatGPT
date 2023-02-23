import React, { useState } from 'react';

import './Chat.css';

import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';

import axios from 'axios';

const Chat = () => {
    const [prompt, setPrompt] = useState('');
    const [completion, setCompletion] = useState('');

    //TODO Dynamically set the endpoint depending on dev or production environment
    const requestEndPoint = 'http://localhost:5050/api/openai';

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
        <section className="chat-section">
            <ChatHeader />
            <ChatMessages message='This is a prop message' />
            <p>{completion}</p>
            <form onSubmit={handleSubmit}>
                <textarea
                    name="question"
                    rows="3"
                    placeholder="Type your question here..."
                    maxLength="250"
                    value={prompt}
                    wrap="hard"
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button type="submit">Submit question</button>
            </form>
        </section>
    );
}

export default Chat;