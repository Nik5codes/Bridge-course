import React, { useState } from 'react';
import Userfilter from './Userfilter';
import './App.css';


const App = () => {
  const [search, setSearch] = useState("");

  const users = [
    { id: 1, name: 'Nikhil' },
    { id: 2, name: 'naveen' },
    { id: 3, name: 'neeraj' }
  ];

  return (
    <div>
      <h1>Search Bar</h1>
      <Userfilter search={search} setSearch={setSearch} users={users}/>
    </div>
  );
};

export default App;