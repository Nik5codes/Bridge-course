import React,{useContext} from 'react'
import { ThemeContext } from './Toggle'

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    const navbarStyle={
        padding:"10px",
        backgroundColor:theme==="light"?"#f0f0f0":"#333",
        color:theme==="light"?"#000":"#fff"
    }
  return (
    <div>
      <nav style={navbarStyle}>Current Theme:{theme}</nav>
      <button onClick={toggleTheme}>THEME</button>
      
    </div>
  )
}

export default Navbar