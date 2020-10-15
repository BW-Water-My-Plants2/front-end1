import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getData } from './actions'

function App(props) {

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="App">
            { props.isFetching ? "Loading" : props.error ? "Error" : "App"}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        "isFetching": state.isFetching,
        "error": state.error
    }
}

export default connect(mapStateToProps, { getData })(App);
