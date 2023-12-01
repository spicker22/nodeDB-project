import React from 'react'

// Create the 'Description' function that will be passed to the App.jsx
const Address = (props) => {

  // Need to show whether or not we are in edit mode
  // Destruct so can use the properties as variables  
  const {isEditing, value, setAddress} = props
  
  // Turny statement is the short hand version of the if/else statement. ':' is else statement
  return isEditing ? (
    <td>
        <input 
        type = "text" 
        value={value}
        onChange = {(e) => setAddress(e.target.value)}
        
        />
    </td>
  ) : (
   <td>
    {value}
   </td>
  )

}

export default Address