   import React from 'react'
   import { NavLink } from 'react-router-dom'

function NestedRoutes() {
  return (
    <div>
      <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/products">Product</NavLink>
         <NavLink to="/about">About</NavLink>
         <NavLink to="/contact">Contact</NavLink>

      </nav>
       
    </div>
  )
}

export default NestedRoutes
