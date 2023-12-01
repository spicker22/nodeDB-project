// Imports.
// import './LandingPage.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard.jsx';
import AddButton from './AddButton.jsx';

import React from 'react'


// The LandingPage function.
const LandingPage = (props) => {



    // currentData is the current state value.
    // setCurrentData is the function to update the 'currentData state. Triggers a re-render of the component when the state changes.
    const [currentData, setCurrentData] = useState([])

    console.log(currentData);



    // Boiler plate for useEffect axios request. This is to make sure axios request runs as soon as the page loads.          
    useEffect(() => {
        axios.get('/doctors')
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
    }, [] )                                       // Add a '[]' because only want to trigger this use Effect when the page loads.





    // addCard is a function that adds a new card of data to the the landing page.
    const addCard = () => {

        axios.post('/doctor' , {description: 'A really cool doctor'})
            .then((res) => {
                console.log(res.data)
                setCurrentData(res.data)
            })
            .catch((theseHands) => {
                console.log(theseHands)
            })
    }




    // Deleting the card function.
    const deleteCard = (id) => {
        axios.delete(`/doctor/${id}`)
        .then((res) => {
            console.log(res.data)
            setCurrentData(res.data)
        })
        .catch((theseHands) => {
            console.log(theseHands);
        })
    }




    // Creates an array of 'DoctorCard' components, each representing a card on the Landing page. 
    // All the items in the 'DoctorCard' return are the associated properties. 
    // The map function is used to iterate over each element (el) in the currentData array.
    const rows = currentData.map((job) => {
        return <DoctorCard 
            initialDoctorData={job} 
            initialEditMode={false} 
            key={job.id}
            deleteCard={() => deleteCard(job.id)}
            currentData={currentData}
            setCurrentData={setCurrentData}
            />
    })




// ?? Research this ?? 
  return (
    <>
    <div>Doctors Offices</div>

    {/* The 'rows' is taken from above. Here it is just being populated in the HTML */} 

    <div>{rows}</div>


    {/* This 'AddButton' is a react component. It has a property 'addRow'
    That addRow is executed when the button is clicked as defined in 
    the 'AddButton.jsx' component */}
    <AddButton addCard={addCard}/> 

    </>
  )
}

export default LandingPage