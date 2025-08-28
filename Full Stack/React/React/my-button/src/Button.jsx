import React from 'react'

const Button = ({text,color,fontSize='24px'}) => {
  return (
    <div>
      <button style={{color:color,fontSize:fontSize}}>{text}</button>
    </div>
  )
}

export default Button
