import React from 'react';

import './Intro.css';

const Intro = () => {
    return (
        <section className="intro-section">
            <h1>ric-chatbot</h1>
            <p>This is my personal <strong>chatbot assistant</strong>.</p>
            <p>You can ask questions regarding my <strong>career</strong>, <strong>education</strong>, and <strong>work experience</strong>. <br />ric-chatbot should be able to provide most of the answers based on <strong>my CV</strong>.</p>
            <p>Give it a try, ask something like: <span>Tell me about your work experience.</span></p>
        </section>
    )
}

export default Intro;