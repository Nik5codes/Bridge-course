import React, { useState } from 'react';  // Remember to import useState
import Child from './Child';

const Parent = () => {
  const [message, setMessage] = useState(''); // Initialize the state

  const handleChange = (newMessage) => {
    setMessage(newMessage); // Update the state with the new message from child
  };

  return (
    <div>
      <h1>Message from child</h1>
      <p>{message}</p>
      <Child onMessageChange={handleChange} />
    </div>
  );
};

export default Parent;
