import React, { useState } from 'react';

const ChatForm = (props) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({text});
        setText('');
    }

    return(
        <form onSubmit={onSubmit}>
            <textarea
                name="question"
                rows="3"
                placeholder="Type your question here..."
                maxLength="250"
                value={text}
                wrap="hard"
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Submit question</button>
        </form>
    );
}

export default ChatForm;