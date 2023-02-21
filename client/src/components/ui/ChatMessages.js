import React, {useState} from 'react';

import './ChatMessages.css';

const ChatMessages = (props) => {
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    
    return (
        <div className="chat-messages">{props.message}</div>
    );
}

export default ChatMessages;