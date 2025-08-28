import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState('');
  const [address, setAddress] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleRadio = (e) => {
    setSelectedRadio(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}\nGender: ${gender}\nCheckbox: ${isChecked}\nSelected Radio: ${selectedRadio}\nAddress: ${address}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" onChange={handleName} value={name} />

        <label>Email:</label>
        <input type="email" onChange={handleEmail} value={email} />

        <label>
          <input type="checkbox" checked={isChecked} onChange={handleCheckbox} />
          Agree to terms
        </label>

        <label>Gender:</label>
        <select name="gender" id="gender" value={gender} onChange={handleGender}>
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <div>
          <label>Are you a student?</label>
          <input
            type="radio"
            name="student"
            value="yes"
            checked={selectedRadio === 'yes'}
            onChange={handleRadio}
          />
          Yes
          <input
            type="radio"
            name="student"
            value="no"
            checked={selectedRadio === 'no'}
            onChange={handleRadio}
          />
          No
        </div>

        <label>Address:</label>
        <textarea name="address" id="address" value={address} onChange={handleAddress}></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
