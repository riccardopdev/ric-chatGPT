import React, { useState } from 'react';

import './Chat.css';

import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatForm from './ChatForm';

import axios from 'axios';

//CSS classes used by ChatMessage.js to style different messages
const CHAT_MESSAGE_CLASS = {
    ERROR: 'chat-messages-error',
    PROMPT: 'chat-messages-prompt',
    COMPLETION: 'chat-messages-completion',
    LOADING: 'chat-messages-loading'
}

const Chat = () => {
    const [message, setMessage] = useState([{text: '', className: ''}]);
    let requestEndPoint = 'http://localhost:5050/api/openai';

    if(process.env.REACT_APP_ENVIRONMENT!=='local_dev') {
        console.log('Making requests to live server on AWS Lambda');
        requestEndPoint = process.env.REQUEST_END_POINT;
    }

    const handleSubmit = async (textData) => {

        setMessage([...message, {text: textData.text, className: CHAT_MESSAGE_CLASS.PROMPT}]);
        const errorMessage = 'Sorry, it seems that I am having some issues forwarding your request. Would you like to try again shortly?';

        try {
            setMessage((previousMessages) => [...previousMessages, {text: 'Loading...', className: CHAT_MESSAGE_CLASS.LOADING}]);
            const response = await axios.post(requestEndPoint, {prompt: textData.text});
            setMessage((previousMessages) => [...previousMessages, {text: response.data.message, className: CHAT_MESSAGE_CLASS.COMPLETION}]);
        } catch (error) {
            console.log(error);
            setMessage((previousMessages) => [...previousMessages, {text: errorMessage, className: CHAT_MESSAGE_CLASS.ERROR}]);
        }
    }

    return (
        <section className="chat-section">
            <ChatHeader />
            <ChatMessages message={message} />
            <ChatForm onSubmit={handleSubmit} />
        </section>
    );
}

export default Chat;