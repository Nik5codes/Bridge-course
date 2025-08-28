import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './Container'

function App() {

  return (
    
  <div className="min-h-screen bg-gradient-to-tr from-orange-500 via-white-800 to-black-500 px-8 py-16">
    <h1 className='text-5xl text-black-800 text-center '>
        Product card
      </h1>
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1.5rem',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>

    
    
      <Container name={'camera1'} price={1499} features={'5cm 1:35'} xtra={'22x'} flash={'flash'}/>
      <Container name={'camera2'} price={1342} features={'6cm 1:33'} xtra={'20x'} flash={'megha flash'}/>
    </div></div>
    
  )
}

export default App
