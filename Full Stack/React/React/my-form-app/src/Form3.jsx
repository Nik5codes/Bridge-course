import React, { useState } from 'react'

const Form3 = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [errors,setErrors] = useState({});

    const validate = () =>
    {
        const newErrors = {};

        if(!name.trim())
        {
            newErrors.name = " name is required";
        }
        if(!email.trim())
        {
            newErrors.name = " name is required";
        }
        else if(!/\S+@\S+\.\S+/.test(email))
        {
            newErrors.email = "Email is invalid";
        }
    }

    const handleName = (e) =>
    {
        setName(e.target.value)
        console.log(name);
        
    }
     const handleEmail = (e) =>
    {
        setEmail(e.target.value)
        console.log(email);
        
    }

  return (
    <div>
      <form >
        <label>Name:</label>
        <input type="text" value={name} onChange={handleName}/>

        <label>Email:</label>
        <input type="Email" value={email} onChange={handleEmail} />

        <button type="submit"></button>
      </form>
    </div>
  )
}

export default Form3
