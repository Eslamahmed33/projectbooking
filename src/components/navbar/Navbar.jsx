import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className="navContainer">
        <div className='logocontain'>
          <span className='imglogo'>
            <img src='../imagehotel/WhatsApp Image 2025-04-19 at 00.17.18_f0c16d9d.jpg' alt="description" />
          </span>
          <span className='logo'><span>M</span>-shwar</span>
        </div>
        <div className="navItems">
          <button className='navButton' onClick={() => navigate('/admin')}>Login Admin</button>
          <button className='navButton' onClick={() => navigate('/register')}>Register</button>
          <button className='navButton' onClick={() => navigate('/login')}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
