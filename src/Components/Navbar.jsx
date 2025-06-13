import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="navbar">
        <Link to={'/'}><h2 className="navbar-logo">STORE</h2></Link>

        <div className="navbar-links">
        
          <NavLink to="/cart" className="navbar-link" activeClassName="active">
            <FaCartShopping className='cart-icon' />
          </NavLink>
        </div>
    </nav>
  )
}
 