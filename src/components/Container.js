import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getData } from './actions'
import Container from './components/Container'

const Container = ({ data, getData, isFetching, error }) => {
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            { isFetching ? "Loading" : error ? "Error" : "App"}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isFetching: state.data.isFetching,
        error: state.data.error,
        data: state.data.data
    }
}

export default connect(mapStateToProps, { getData })(Container)