import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => setName(e.target.value);
  const handleUser = (e) => setUser(e.target.value);
  const handlePass = (e) => setPass(e.target.value);

  const handleSubmit = () => {
    if (user === 'admin') {
      setMessage("Welcome Admin");
    } else if (user === 'student') {
      setMessage("Welcome Student");
    } else if (user === 'mentor') {
      setMessage("Welcome Mentor");
    } else {
      setMessage("Unknown role");
    }
  };

  return (
    <div>
      <h2>Welcome to Stemup</h2>
      <p>Enter credentials</p>

      <input type="text" name="name" id="name" placeholder="Enter name" onChange={handleName} />
      <input type="password" name="password" id="password" placeholder="Enter password" onChange={handlePass} />
      <input type="text" value={user} name="role" id="role" placeholder="admin,student,mentor" onChange={handleUser} />
      
      <button type="button" onClick={handleSubmit}>Submit</button>

      
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
