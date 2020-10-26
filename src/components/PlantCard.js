import React from 'react'

const PlantCard = ({ plant, editFunc, deleteFunc }) => {
    return (
        <div className="Card" >
            <button onClick={() => editFunc(plant)}>Edit</button>
            <button onClick={deleteFunc}>X</button>
            <h3>{plant.plant_name}</h3>
            <p>{plant.plant_species}</p>
        </div>
    )
}

export default PlantCard