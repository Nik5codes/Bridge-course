import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sub from './Sub'
import Lists from './Lists'

function App() {

  return (
    <div>
      <Sub plan={"free"}Login={false}/>
    <Lists />
    </div>
    
  )
}

export default App
