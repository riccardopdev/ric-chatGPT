import React from 'react';
import Intro from './ui/Intro';
import Chat from './ui/Chat';

class App extends React.Component {
    render() {
        return (
            <>
                <Intro />
                <Chat />
            </>
        );
    }
}

export default App;