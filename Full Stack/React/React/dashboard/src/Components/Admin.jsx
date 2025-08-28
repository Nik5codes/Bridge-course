import React from 'react'
import { NavLink } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <h2>Hey I am Admin</h2>
       <nav>
        <NavLink
          to="/Admin"
          style={({ isActive }) => ({
            marginRight: "10px",
            color: isActive ? "blue" : "red",
          })}
        >
          Admin
        </NavLink>
        <NavLink
          to="/Mentor"
          style={({ isActive }) => ({
            marginRight: "10px",
            color: isActive ? "blue" : "red",
          })}
        >
          Mentor
        </NavLink>
        <NavLink
          to="/student"
          style={({ isActive }) => ({
             marginRight: "10px",
            color: isActive ? "blue" : "red",
          })}
        >
          Students
        </NavLink>
       
      </nav>
         {/* <Outlet/> */}
    </div>
  )
}

export default Admin
