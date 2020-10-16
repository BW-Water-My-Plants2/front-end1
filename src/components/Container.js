import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getData } from '../actions'
import Card from './Card'

const Container = ({ data, getData, isFetching, error }) => {
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="Container">
            { isFetching ? "Loading" : error ? "Error" : data.map(dog => (
                <Card key={dog.id} dog={dog} />
            ))}
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