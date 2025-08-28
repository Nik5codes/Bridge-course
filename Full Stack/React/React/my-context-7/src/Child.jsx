import React from 'react'
import { UserContext } from './App';
import { useContext } from 'react';

const Child = () => {
    const user = useContext(UserContext);
  return (
    <div>
      <h1>hello {user}</h1>
    </div>
  )
}

export default Child
