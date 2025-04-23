import React from 'react'
import { FaUserCircle } from 'react-icons/fa' // أيقونة المستخدم
import './login.css'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">
          <FaUserCircle size={60} color="#00b4db" />
        </div>
        <h2>Welcome Back</h2>
        <p className="login-subtitle">Please login to your account</p>
        <input type="text" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />
        <button className="login-button">Login</button>
        <p className="login-footer">Don't have an account? <a href="/register">Register</a></p>
      </div>
    </div>
  )
}

export default Login
