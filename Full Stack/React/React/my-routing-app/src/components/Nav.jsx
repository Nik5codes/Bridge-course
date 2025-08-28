import React from 'react'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Nav = ({isActive}) => {
  return (
    <div>
        <h1>this is Nav</h1>
        <nav>
            <NavLink to= '/home'
                style={{marginRight:"10px",
                    color:"black"
                }}>Home</NavLink>
            <NavLink to= '/aboutus'
            style={{marginRight:"10px"}}>About us</NavLink>
            <NavLink to= '/contactus'>Contact us</NavLink>
            <NavLink to= '/products'>Product</NavLink>
        </nav>
        
    </div>
  )
}

export default Nav
