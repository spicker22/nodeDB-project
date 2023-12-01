import React from 'react'


// Import multiple child components.
import DoctorsName from './DoctorsName.jsx';
import years from './years.jsx';
import address from './address.jsx';
import ModeButton from './ModeButton.jsx';
import { useState } from 'react';
import axios from 'axios'


// Create the 
const DoctorCard = (props) => {
 
 



    // ?? Can we delete 'currentData'? It seems we are not using it so I suspect we can  ??
     // Destructing the properties from initialDoctorData and others
     const {initialDoctorData, initialEditMode, deleteCard, currentData, setCurrentData} = props
 
 



    // 'useState' establishing the variable 'editMode' and function to change that state
    const [editMode, setIsEditing] = useState(initialEditMode)
    const [DoctorsName, setDoctorsName] = useState(initialDoctorData.DoctorsName)
    const [years, setYears] = useState(initialDoctorData.years)
    const [address, setAddress] = useState(initialDoctorData.address)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {
        
        const bodyObj = {
            DoctorsName: DoctorsName,
            years: years,
            address: address
        }



        /// Doing a put request to that parameter, then pass in a body object (bodyObj)
        axios.put(`/doctor/${initialDoctorData.id}` , bodyObj)                
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
            setIsEditing(false)
        })
        .catch((theseHands) => {
            console.log(theseHands);
        })

    }












    // ?? Need to research this ??
 
    return (

        <>
    <div>DoctorCard</div>

        {/* <tr>
        <ModeButton 
            isEditing={editMode} 
            changeEditMode={changeEditMode}
            changeNormalMode={changeNormalMode}
            deleteCard={deleteCard}
            /> */}

        <DoctorsName 
            isEditing={editMode} 
            value={DoctorsName} 
            setDoctorsName={setDoctorsName}
            />

        {/* <years 
            isEditing={editMode} 
            value={years}
            setYears = {setYears}
            />

        <Hours 
            isEditing={editMode} 
            value={address}
            setAddress = {setAddress}
            />
        </tr> */}

        </>

    )
}

export default DoctorCard