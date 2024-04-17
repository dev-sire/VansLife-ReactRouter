import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import imageURL from "../assets/avatar-icon.png"

export default function Header() {
  const activeStyles = {
    fontWeight : "bold",
    textDecoration: "underline",
    color: "#161616"
  }
  return (
    <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
            <NavLink to="/host" style={({isActive}) => isActive ? activeStyles : null}>Host</NavLink>
            <NavLink to="/about" style={({isActive}) => isActive ? activeStyles : null}>About</NavLink>
            <NavLink to="/vans" style={({isActive}) => isActive ? activeStyles : null}>Vans</NavLink>
            <Link to="login" className="login-link"><img src={imageURL} className="login-icon"/></Link>
        </nav>
    </header>
  )
}