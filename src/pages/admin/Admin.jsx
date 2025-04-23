import React, { useState } from 'react';
import './admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // ✅ استدعاء useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ تعريف النفيجيت

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'eslam@gmail.com' && password === '2468') {
      navigate('/dashboard'); // ✅ تحويل فعلي
    } else {
      alert('خطأ في البريد الإلكتروني أو كلمة المرور.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <FontAwesomeIcon icon={faUserCircle} className="logo-icon" />
        </div>
        <h2>تسجيل الدخول</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            تسجيل الدخول
          </button>
        </form>
      </div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default Login;
