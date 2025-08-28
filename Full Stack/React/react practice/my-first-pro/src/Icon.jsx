import React, { useState } from 'react'

const Icon = () => {
  let a=10;
  const [count,useCount] = useState(a);

  const onClickHandle = ()=>{
    useCount(count+1)
  }


  return (
    <div>
      <h1>Click to increase count</h1>
      
      <button type="button" onClick={onClickHandle}>Count: {count}</button>
    </div>
  )
}

export default Icon