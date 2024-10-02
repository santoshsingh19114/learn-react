import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/" className={({isActive}) =>isActive?"active-link":""}>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) =>isActive?"active-link":""}>about</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard" className={({isActive}) =>isActive?"active-link":""}>Dashboard</NavLink>
            </li>
        </ul>
        {/* <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul> */}
    </div>
  )
}

export default Navbar