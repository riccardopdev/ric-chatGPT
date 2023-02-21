import React from 'react';

import ChatbotThumbnail from '../../images/chatbot-thumbnail.jpg';

import './ChatHeader.css';

const ChatHeader = () => {
    return (
        <div className="chat-header">
            <div className="info">
                <img src={ChatbotThumbnail} alt="chatbot"/>
                <div>
                    <p>Chat with</p>
                    <h3>ric-chatbot</h3>
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;