import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { deletePlant, fetchData, startEdit } from '../actions/index'
import PlantCard from "./PlantCard"

const PlantContainer = ({ plants, fetchData, deletePlant, startEdit }) => {
    const { push } = useHistory();

    useEffect(() => {
        fetchData()
    }, [])

    const editFunc = (plant) => {
        push(`/plant-form`)
        startEdit(plant)
    }

    const deleteFunc = (e) => {
        deletePlant(e.target.value)
        fetchData()
    }

    return (
        <div>
            {plants && plants.map(plant =>
                <PlantCard plant={plant} editFunc={editFunc} deletePlant={deleteFunc} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        plants: state.crud.plants
    }
}

export default connect(mapStateToProps, { deletePlant, fetchData, startEdit })(PlantContainer);