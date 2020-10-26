import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { addPlant, editPlant } from '../actions'
import { useHistory, useParams } from 'react-router-dom'

const PlantForm = ({ addPlant, editPlant, editing, plant }) => {
    const [form, setForm] = useState({
        "plant_name": "",
        "plant_species": "",
        "water_schedule": ""
    })
    const { push } = useHistory();

    useEffect(() => {
        setForm({ ...plant })
        console.log(plant)
    }, [])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editing ? editPlant(plant.id, form) : addPlant(form)
        setForm({
            "plant_name": "",
            "plant_species": "",
            "water_schedule": ""
        })
        push("/dashboard")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name={"plant_name"} type="text" value={form.plant_name} onChange={handleChange} placeholder={"Name"} />
            <input name={"plant_species"} type="text" value={form.plant_species} onChange={handleChange} placeholder={"Species"} />
            <input name={"water_schedule"} type="text" value={form.water_schedule} onChange={handleChange} placeholder={"Watering Schedule"} />
            <button type="submit">{editing ? "edit" : "add"}</button>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        editing: state.crud.editing,
        editId: state.crud.editId,
        plant: state.crud.plant
    }
}

export default connect(mapStateToProps, { addPlant, editPlant })(PlantForm)