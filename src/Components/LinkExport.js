import React from 'react'
import { Link } from 'react-router-dom'

function LinkExport() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default LinkExport
