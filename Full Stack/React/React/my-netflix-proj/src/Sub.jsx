import React from 'react'
import netflix from './assets/download.png'
import stars from './assets/stars.gif'
import Login from '../../my-project-30/src/login';


function Sub({plan,LogIn}) {
    

    let message
    if(plan == 'free')
        message = 'free plan';
    else
    {
        message='paid plan'
    }
    

    const handleClick = () => {
        setLogIn(!Login)
    }

  return (
    <div>
      <h3>Welcome to netflix</h3>
      {/* <img src={netflix} alt="Netflix" /> */}
      <img src={stars} alt="" style={imgStyle}/><br />
      {message}
      <button type="submit" onClick={handleClick}>{LogIn?'logout':'login'}
      </button>
    </div>
  )
}
const imgStyle = {
  width: '1000px',
  height: '500px',
  objectFit: 'cover',
  borderRadius: '6px',
  marginBottom: '1rem'
};

export default Sub
