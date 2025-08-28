import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Logcomponent from './Logcomponent'
import Login from './login'
import Login2 from './Login2'

function App() {

  return (
    <div>
      {/* <Login isLogged={false}/> */}
      <Login2 />
    </div>
    
  )
}

export default App
