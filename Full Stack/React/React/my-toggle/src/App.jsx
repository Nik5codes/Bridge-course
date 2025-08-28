import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './Toggle.jsx'
import ThemeProvider from './Toggle.jsx'
import Navbar from './Navbar.jsx'



function App() {

  return (
   <div>
    <ThemeProvider>
      <div>
        <Navbar>
        <Toggle/>
        </Navbar>
      </div>
    </ThemeProvider>

   </div>
  )
}

export default App