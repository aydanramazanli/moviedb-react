import React, {useState} from 'react'
import logo from '../../images/logo.svg'
import './_navbar.scss'

import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIOpen] = useState()
 const visible=()=>{
  setIOpen(!isOpen)
 }
 
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to='/'> <img src={logo} alt="logo" /></Link>
       
      </div>

      <nav className="navbar__navbar">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Account</Link>
          </li>
          <li className="nav-item">
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </nav>
    

      <div className="navbar__auth">
    
        <button>
          <Link to="/login"> Login</Link>
        </button>
        {/* <button>
        Logout
        </button> */}
      </div>
      <div className="mobile-navbar">
        <i className="fa-solid fa-bars" onClick={visible}></i>
        {isOpen ?  <nav className="sidebar">
        <ul>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Account</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Wishlist</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>: null }
       
      </div>
    </div>
  )
}
