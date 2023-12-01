import React from 'react'

// Create the 'Description' function that will be passed to the App.jsx
const Address = (props) => {

  // Need to show whether or not we are in edit mode
  // Destruct so can use the properties as variables  
  const {isEditing, value, setAddress} = props
  
  // Turny statement is the short hand version of the if/else statement. ':' is else statement
  return isEditing ? (

    // The if statement
    <td>
        <input 
        type = "text" 
        value={value}
        onChange = {(e) => setAddress(e.target.value)}
        
        />
    </td>
  ) : (
    // The else statement. 
   <td>
    {value}
   </td>
  )
}

export default Address