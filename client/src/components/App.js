import React from 'react';
import Intro from './ui/Intro';
import Chat from './ui/Chat';

import './App.css';

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