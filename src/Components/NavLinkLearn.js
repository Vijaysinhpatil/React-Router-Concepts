import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLinkLearn() {

  const NavLinkCss = ({isActive}) => { //if true
      return {
        fontWeight : isActive ? 'bold' : 'normal',
        fontSize : isActive ? '23px' : '15px'

      }

  }
  return (
    <nav>
        <NavLink style={NavLinkCss} to="/">Home</NavLink>
        <NavLink style={NavLinkCss} to="/about">About</NavLink>
        <NavLink style={NavLinkCss} to="/contact">Contact</NavLink>
    </nav>
  )
}

export default NavLinkLearn; 
