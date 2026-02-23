import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">

        {/* Left Logo */}
        <Link className="navbar-brand" to="/" style={{fontSize:"2.5 rem"}}>
          TradeCore
        </Link>

        {/* Right Menu */}
        <ul className="navbar-nav ms-auto d-flex flex-row gap-4">
          <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/product">Products</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/pricing">Pricing</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/support">Support</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" href="#"><i class="fa-solid fa-bars"></i></Link>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
