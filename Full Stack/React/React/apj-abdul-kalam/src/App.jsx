import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent'
import Child from './child'

function App() {
  const name = 'Abdul kalam'

  return (
    <div>
     <Parent />
     <Child />
    </div>
    
  )
}

export default App
