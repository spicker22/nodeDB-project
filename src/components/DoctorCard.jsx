import React from 'react'
import './DoctorCard.css';

// Import multiple child components.
import DoctorsName from './DoctorsName.jsx';
import Years from './years.jsx';
import Address from './address.jsx';
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
    const [doctorsName, setDoctorsName] = useState(initialDoctorData.DoctorsName)
    const [years, setYears] = useState(initialDoctorData.years)
    const [address, setAddress] = useState(initialDoctorData.address)

    const changeEditMode = () => setIsEditing(true)
    const changeNormalMode = () => {
        
        const bodyObj = {
            DoctorsName: doctorsName,
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




    return (
        <div className = "card">

            <div>
            <DoctorsName 
                isEditing={editMode} 
                value={doctorsName} 
                setDoctorsName={setDoctorsName}
                />
            </div>

            <div>
            <Years 
                isEditing={editMode} 
                value={years}
                setYears = {setYears}
                />
            </div>

            <div>
            <Address 
                isEditing={editMode} 
                value={address}
                setAddress = {setAddress}
                />
            </div>


            <ModeButton 
                isEditing={editMode} 
                changeEditMode={changeEditMode}
                changeNormalMode={changeNormalMode}
                deleteCard={deleteCard}
                />
    
        </div>

    )
}

export default DoctorCard