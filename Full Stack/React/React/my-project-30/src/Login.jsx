// import React from 'react'
// import { useState } from 'react'

// const Login = () => {
//     const [logIn,setLogIn] = useState (false);
//     const [name, setName] = useState('');

// const handleClick = () => {
//     setLogIn(!logIn)
    
// }
// const handleinput = (e) => {
//     console.log(e.target.value)
//     setName(e.target.value)
// }
// const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name === 'React') {
//         alert('Welcome back, user!')
//     } else {
//         alert('Create an account to get started.')
//     }
//   }
//   return (
//     <div>
//       <input type="text" name="name" id="name" onChange={handleinput} />
//       <button type='submit' onClick={handleSubmit} >
//         {logIn?'logout':'login'}
//       </button>
      
//       {logIn?<p>Logged in</p>: <p>please login</p>}
//     </div>
//   )
// }

// export default Login



import React from 'react'
import { useState } from 'react'

const Login = () => {
    const [name, setName] = useState('');

const handleinput = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault();
    if (name === 'Admin') {
        alert('Welcome back, user!')
    } else {
        alert('Create an account to get started.')
    }
  }
  return (
    <div>
      <input type="text" name="name" id="name" placeholder='Enter username' onChange={handleinput} />
      <button type='submit' onClick={handleSubmit} >
        Submit
      </button>
    </div>
  )
}

export default Login