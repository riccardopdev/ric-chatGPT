import React from 'react';

import './Intro.css';

const Intro = () => {
    return (
        <section className="intro-section">
            <h1>ric-chatbot</h1>
            <p>Hi, my name is <strong>Riccardo</strong>.</p>
            <p>I'd like to introduce you to my personal <strong>chatbot assistant</strong>.</p>
            <p>This project is an experimental and enjoyable endeavor that utilizes <strong>OpenAI API</strong>, <strong>React</strong>, <strong>Node</strong>, and <strong>Express</strong> in its technology stack.</p>
            <p>Feel free to ask any questions about my  <strong>career</strong>, <strong>education</strong>, and <strong>work experience</strong>. <br />My chatbot assistant, ric-chatbot, will do its best to provide accurate answers based on the information available in <strong>my CV</strong>.</p>
            <p>Give it a try, ask something like: <span>What web technologies is Riccardo proficient in?</span></p>
        </section>
    )
}

export default Intro;