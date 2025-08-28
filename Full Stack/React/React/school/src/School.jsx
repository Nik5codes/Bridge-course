import React from 'react'
import { NavLink } from 'react-router-dom'

const School = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <nav>
        <NavLink
          to="/Admin"
          style={({ isActive }) => ({ color: isActive ? 'green' : 'pink', marginRight: '20px' })}
        >
          Admin
        </NavLink>
        <NavLink
          to="/Mentor"
          style={({ isActive }) => ({ color: isActive ? 'green' : 'pink', marginRight: '20px' })}
        >
          Mentor
        </NavLink>
        <NavLink
          to="/Student"
          style={({ isActive }) => ({ color: isActive ? 'green' : 'pink' })}
        >
          Student
        </NavLink>
      </nav>
    </div>
  )
}

export default School
