import React from 'react'

const Lists = () => {
    const courses = ['mong','express','node','react'];

  return (
    <div>
      <ul>
        {
            courses.map((item,index) => (
                <li key={index}>{item}</li>
            )) 
        }
      </ul>
    </div>
  )
}

export default Lists
