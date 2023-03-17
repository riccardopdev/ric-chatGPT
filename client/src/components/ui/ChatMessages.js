import React, { useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './ChatMessages.css';

const ChatMessages = (props) => {
    const srclMsgRef = useRef();

    useEffect(() => {
        srclMsgRef.current.scrollTop = srclMsgRef.current.scrollHeight;
        
    }, [props.message]);

    const renderMessages = () => {
        if(props.message.length >= 1) {
            return props.message.map((message) => {
                return (
                    <div className={message.className} key={uuidv4()}>{message.text}</div>
                );
            });
        }
    }
    
    return (
        <div className='chat-messages' ref={srclMsgRef}>
            {renderMessages()}
        </div>
    );
}

export default ChatMessages;