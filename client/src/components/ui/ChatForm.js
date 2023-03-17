import React, { useState, useRef } from 'react';

import './ChatForm.css';

const ChatForm = (props) => {
    const [text, setText] = useState('');
    const txtAreaRef = useRef();

    const handleSubmit = (ev) => {
        ev.preventDefault();

        props.onSubmit({text});
        setText('');
        txtAreaRef.current.focus();
    }

    const handleKeyDown = (ev) => {
        if(ev.keyCode === 13) handleSubmit(ev);
    }

    return(
        <form className='chat-form' onSubmit={handleSubmit}>
            <textarea
                ref={txtAreaRef}
                autoFocus
                name="question"
                rows="3"
                placeholder="Type your question here..."
                maxLength="250"
                value={text}
                wrap="hard"
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button type="submit">Submit question</button>
        </form>
    );
}

export default ChatForm;