import React from 'react'
import './Welcome.css'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
        <h1>
            Welcome to Notes app
        </h1>
        <Link to="/subjects">Go to Subjects</Link>
    </div>
  )
}

export default Welcome