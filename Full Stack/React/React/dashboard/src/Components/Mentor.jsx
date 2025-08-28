import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Mentor = () => {
  return (
    <div>
      <h2>Heyy i am Mentor</h2>
      <nav>
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
    </div>
  );
};

export default Mentor;

//          <Outlet/>
