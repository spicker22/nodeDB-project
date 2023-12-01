import React from 'react'


// Create the 'ModeButton' function that will be passed to the App.jsx
const ModeButton = (props) => {

    // Need to show whether or not we are in edit mode
    // Destruct so can use the properties as variables
    // 'isEditing' is property that will come from the ModeButton parent componet
    const {isEditing, changeEditMode, changeNormalMode, deleteCard} = props

    // Created an if/else statement to return the 'Save' button or 'Delete' & 'Edit' buttons
    if (isEditing) {
        return <td>
            <button onClick={changeNormalMode}>Save</button>
            </td>
    } else {
        return <td>
            <button onClick={deleteCard}>Delete</button>
            <button onClick={changeEditMode}>Edit</button>
        </td>
    }

}

export default ModeButton