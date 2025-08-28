import React, { useState } from 'react'

const Count: React.FC = () => {
    const [count,setCount]= useState<number> (0);
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={()=> setCount(count+1)}>increment</button>
    </div>
  )
}

export default Count
