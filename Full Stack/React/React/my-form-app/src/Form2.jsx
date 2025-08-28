
import React, { useRef } from 'react'
import { useState } from 'react';


const Form2 = () => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const name = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`value: ${name.current.value}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" ref={name} />
        <button type="submit"></button>
      </form>

    </div>
  )
}

export default Form2
