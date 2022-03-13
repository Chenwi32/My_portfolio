import React, { useEffect, useState } from 'react'
// import fs from 'fs'

// function projects({ data }) {
//   return <div>{data}</div>
// }

function projects() {
  const [users, setUsers] = useState(null)
  useEffect(async function userList() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersList = await response.json()
    setUsers(usersList)
  }, [])
  return (
    <ul>
      {users && users.map((user) => {
        return <li key={user.id}>{user.name}</li>
      })}
    </ul>
  )
}

export default projects
