import React from 'react'

const Years = (props) => {




  // Need to show whether or not we are in edit mode
  // Destruct so can use the properties as variables  
  const {isEditing, value, setYears} = props
  
  // Turny statement is the short hand version of the if/else statement. ':' is else statement
  return isEditing ? (

    // The if statement
    // Returns the value
    <td>
        $<input 
        type = "text" 
        value={value}
        onChange = {(e) => setYears(e.target.value)}
        />/hr
    </td>
  ) : (

    // The else statement. 
   <td>
    {value}
   </td>
  )





 
}

export default Years