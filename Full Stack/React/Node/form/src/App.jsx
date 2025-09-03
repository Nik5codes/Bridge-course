import {  Router,Route,Routes, Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'


function App() {

  return (
   <div>
      <nav>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
   </div>
  )
}

export default App