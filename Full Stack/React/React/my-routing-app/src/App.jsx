import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContactUs from './components/ContactUs'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Products from './components/Products'
import Categories from './Categories'


function App() {

  return (
    <div>
      <Routes>
            <Route path='/' element={<Nav />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/aboutus' element={<AboutUs />} >
              <Route path='Categories' element={<Categories />}></Route>
            </Route>



            {/* <Route path='/product/:productId' element={<Products />}>
              <Route path='categories' element= {<Categories/>}/>
            </Route> */}
      </Routes>
    </div>
  )
}

export default App
