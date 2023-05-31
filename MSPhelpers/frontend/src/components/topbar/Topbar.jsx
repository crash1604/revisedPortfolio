import React from 'react'
import './topbar.css'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            MSP Helpers <i class="fa-sharp fa-solid fa-tv"></i>
          </Link>
        </div>
      </nav>
    </>
  )
}