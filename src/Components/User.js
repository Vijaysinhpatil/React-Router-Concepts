import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div>
      <h1>Users Page</h1>
      <h2><Link to='/user/1'>User1</Link></h2>
      <h2><Link to='/user/2'>User2</Link></h2>
      <h2><Link to='/user/3'>User3</Link></h2>
      <Outlet/>
      
    </div>
  )
}

export default User
