import './App.css'
import Subjects from './components/Subjects'
import Welcome from './components/Welcome'
import Cn from './components/Cn'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/cn" element={<Cn />} />
      </Routes>
    </>
  )
}

export default App
