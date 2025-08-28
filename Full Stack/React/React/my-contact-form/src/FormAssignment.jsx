import React from 'react'
import { useState } from 'react'
const FormAssignment = () => {
const[name,setName]= useState("");
const[email,setEmail]= useState("");
const[contact,setContact]= useState("");

const handleName=(e)=>{
    setName(e.target.value)
}
const handleEmail=(e)=>{
    setEmail(e.target.value)
}
const handleContact=(e)=>{
    setContact(e.target.value)
}
const handleSubmit = () => {
    alert(`Name is ${name} and the email is ${email}, contact is ${contact}`);
  };

  return (
    <div className='a'>
        <h1 style={{color:"black"}}>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='b'>
            <label htmlFor="name" style={{color:"black"}}>Name: </label>
            <input type="text"  onChange={handleName} value={name} style={{backgroundColor:"white"}}/> <br /><br />
            <label htmlFor="email" style={{color:"black"}}>Email: </label>
            <input type="email" onChange={handleEmail} value={email} style={{backgroundColor:"white"}}/><br /><br />
            <label htmlFor="number" style={{color:"black"}}>Contact number: </label>
            <input type="number" onChange={handleContact} value={contact} style={{backgroundColor:"white"}}/><br /><br />

            <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FormAssignment