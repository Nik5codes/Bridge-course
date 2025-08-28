import React from 'react';

const Userfilter = ({ search, setSearch, users }) => {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>enter element</h2>
      <input type="text" placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ol>
        {filteredUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Userfilter;