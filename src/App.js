import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getData } from './actions'
import Container from './components/Container'

function App() {

    return (
        <div className="App">
            Dog API
            <Container />
        </div>
    );
}

export default App
