import React from 'react'
import { NavLink } from 'react-router-dom'

const Subjects = () => {
  return (
    <div>
        <nav>
            <NavLink to='/cn'>Computer Network</NavLink>
            <h3>DSA</h3>
            <h3>Java</h3>
            <h3>React</h3>
            <h3>Node.js</h3>
        </nav>
    </div>
  )
}

export default Subjects
