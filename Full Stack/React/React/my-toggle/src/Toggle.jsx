import React,{createContext,useState} from 'react'

export const ThemeContext=createContext();
export const Toggle = ({children}) => {
    const[theme,setTheme]=useState("light");

    const toggleTheme=()=>{
        setTheme((prevTheme)=>(prevTheme=="light"?"dark":"light"));
    }
    
  return (
    <div>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default Toggle