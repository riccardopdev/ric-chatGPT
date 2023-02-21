import React from 'react';

import './ChatMessages.css';

const ChatMessages = (props) => {
    return (
        <div>{props.message}</div>
    );
}

export default ChatMessages;