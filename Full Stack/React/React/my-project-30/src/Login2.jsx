import React from 'react'
import { useState } from 'react';

const Login2 = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(name=='react')
        {
            alert('Welcome back, user!')
        }
        else{
            alert('Create an account to get started.')
        }
    }

  return (
    <div>
      <input type="text" name="name" id="name" onChange={handleChange}/>
      <input type="button" value="Login" onClick={handleSubmit}/>
    </div>
  )
}

export default Login2
