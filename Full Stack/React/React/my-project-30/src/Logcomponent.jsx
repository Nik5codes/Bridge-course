import React, { useState } from 'react'

const Logcomponent = ({isLogged}) => {
    const [logIn,setLogIn] = useState(isLogged);
    
    const handleClick = () => {
        setLogIn(!logIn)
    }

    let message
    if(logIn)
    {
        message= <p>welcome</p>
    }
    else{
        message = <p>please login</p>
    }
  return (
    <div>
      <button type='submit' onClick={handleClick}>
        {logIn?'logout':'login'}
      </button>
      {message}
    </div>
  )
}

export default Logcomponent
