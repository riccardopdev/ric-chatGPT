import React from 'react';

import './Intro.css';

const Intro = () => {
    return (
        <section className="intro-section">
            <h1>ric-chatbot</h1>
            <p>Hi, my name is <strong>Riccardo</strong>.</p>
            <p>This is my personal <strong>chatbot assistant</strong>.</p>
            <p>It's an experimental and fun project that uses <strong>OpenAI API</strong>, <strong>React</strong>, <strong>Node</strong> and <strong>express</strong> in its technology stack.</p>
            <p>You can ask questions regarding my <strong>career</strong>, <strong>education</strong>, and <strong>work experience</strong>. <br />ric-chatbot will answer to the best of its knowledge based on information from <strong>my CV</strong>.</p>
            <p>Give it a try, ask something like: <span>Tell me about Riccardo's work experience?</span></p>
        </section>
    )
}

export default Intro;