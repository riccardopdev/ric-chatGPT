import React from 'react';

import './App.css';

import Intro from './ui/Intro';
import Chat from './ui/Chat';

class App extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <Intro />
                <Chat />
            </div>
        );
    }
}

export default App;