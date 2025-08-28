import React, { useState } from 'react'

const Userlist = () => {
    const [search, setSearch] = useState('');

    const users = [
        {id:1,name:'john'},
        {id:2,name:'jonny'},
        {id:3,name:'janardhan'},
    ]

    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h2>User list</h2>
      <input type="text" placeholder='search' value={search} onChange={(e) => setSearch(e.target.value)} />

        <ul>
            
        </ul>

    </div>
  )
}

export default Userlist
