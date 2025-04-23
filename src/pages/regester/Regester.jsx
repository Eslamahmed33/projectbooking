import React from 'react'
import { FaUser, FaEnvelope, FaLock, FaUserPlus, FaCity, FaPhone, FaKey } from 'react-icons/fa'
import './regester.css'

const Regester = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="register-icon">
          <FaUserPlus size={60} color="#00b4db" />
        </div>
        <h2>Create Account</h2>
        <p className="register-subtitle">Join us today! It’s quick and easy.</p>

        <div className="input-wrapper">
          <FaUser className="input-icon" />
          <input type="text" placeholder="First Name" className="register-input" />
        </div>

        <div className="input-wrapper">
          <FaUser className="input-icon" />
          <input type="text" placeholder="Last Name" className="register-input" />
        </div>

        <div className="input-wrapper">
          <FaCity className="input-icon" />
          <select className="register-input">
            <option value="">Select City</option>
            <option value="cairo">Cairo</option>
            <option value="alex">Alexandria</option>
            <option value="giza">Giza</option>
            <option value="luxor">Luxor</option>
            <option value="aswan">Aswan</option>
            <option value="sharm">Sharm El Sheikh</option>
            <option value="hurghada">Hurghada</option>
            <option value="portsaid">Port Said</option>
            <option value="suez">Suez</option>
            <option value="mansoura">Mansoura</option>
            <option value="tanta">Tanta</option>
            <option value="damanhur">Damanhur</option>
            <option value="zagazig">Zagazig</option>
            <option value="ismailia">Ismailia</option>
            <option value="beni-suef">Beni Suef</option>
            <option value="minya">Minya</option>
            <option value="sohag">Sohag</option>
            <option value="qena">Qena</option>
            <option value="asuit">Asuit</option>
            <option value="fayoum">Fayoum</option>
            <option value="kafr-el-sheikh">Kafr El Sheikh</option>
            <option value="dakahlia">Dakahlia</option>
            <option value="behera">Behera</option>
            <option value="gabalya">Gabalya</option>
          </select>
        </div>

        <div className="input-wrapper">
          <FaPhone className="input-icon" />
          <input type="text" placeholder="Phone Number" className="register-input" />
        </div>

        <div className="input-wrapper">
          <FaEnvelope className="input-icon" />
          <input type="email" placeholder="Email" className="register-input" />
        </div>

        <div className="input-wrapper">
          <FaLock className="input-icon" />
          <input type="password" placeholder="Password" className="register-input" />
        </div>

        <div className="input-wrapper">
          <FaKey className="input-icon" />
          <input type="password" placeholder="Confirm Password" className="register-input" />
        </div>

        <button className="register-button">Register</button>

        <p className="register-footer">Already have an account? <a href="/login">Login</a></p>
      </div>
    </div>
  )
}

export default Regester
