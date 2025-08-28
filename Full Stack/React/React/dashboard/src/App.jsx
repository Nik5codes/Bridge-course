import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Admin from "./Components/Admin";
import Mentor from "./Components/Mentor";
import Student from "./Components/Student";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/mentor" element={<Mentor />} />
      <Route path="/student" element={<Student />} />
    </Routes>
    </div>
  );
}

export default App;
