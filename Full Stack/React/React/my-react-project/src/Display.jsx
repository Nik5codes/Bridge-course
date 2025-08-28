import React, { useState } from 'react'

const Display = () => {
  
    const[name,setname] = useState("");
    
    const handle = (e) =>
    {
        setname(e.target.value);
        // console.log(e);
    }
    return (
    <div>
      <input type="text" placeholder='enter the name' onChange={handle}/>
      <p>welcome {name}</p>
    </div>
  )
}

export default Display
