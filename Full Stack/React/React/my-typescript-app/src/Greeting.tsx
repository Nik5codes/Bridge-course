import React from 'react'

interface GreetingProps{
    name:string;
    age?:number;
}

const Greeting: React.FC<GreetingProps> = ({name,age}) => {
  return (
    <div>
      <h1>Hello {name}, Age: {age?`age is ${age}`:`age is not specified`}</h1>
    </div>
  )
}

export default Greeting