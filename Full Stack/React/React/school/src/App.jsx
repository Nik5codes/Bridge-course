import './App.css'
import {Routes, Route } from 'react-router-dom'
import Admin from './Admin'
import Mentor from './Mentor'
import Student from './Student'
import School from './School'

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<School />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Mentor" element={<Mentor />} />
        <Route path="/Student" element={<Student />} />
      </Routes>
    
  )
}

export default App
