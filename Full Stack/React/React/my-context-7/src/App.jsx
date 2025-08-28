import { createContext, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './Parent';

export const UserContext = createContext();


function App() {
  const user = 'john Doe';

  return (
    <>
      <UserContext.Provider value={user}>
        <Parent />
      </UserContext.Provider>
    </>
  )
}

export default App
