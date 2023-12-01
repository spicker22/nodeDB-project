import React from 'react'

// Create the 'AddButton' function that will be passed to the App.jsx
const AddButton = (props) => {

    // Destruct so can use the properties as variables  
    const {addCard} = props

    return (
        <button onClick={addCard}>Add</button>
    )
}

export default AddButton