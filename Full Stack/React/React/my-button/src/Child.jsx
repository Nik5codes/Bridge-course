import React from 'react'

const Child = ({onMessageChange}) => {
  const handleChange = (e) =>
  {
    onMessageChange(e.target.value)
  }
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Child
