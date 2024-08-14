import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://products-back-90dz.onrender.com/user/login', {
        email,
        password
      });
      console.log(response.data);
      setSuccess('Login successful! Redirecting...');
      setError('');
      // Perform any additional actions on successful login, like redirecting to a different page
      setTimeout(() => {
        onClose(); // Close the login form after successful login
      }, 2000);
    } catch (err) {
      setError('Invalid email or password. Please try again.');
      setSuccess('');
      console.error('Error logging in:', err);
    }
  };

  return (
    <div className="login-container">
      <div className="right-side">
        <div className="auth-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <button type="submit" className="auth-button">Login</button>
          </form>
          <p className="auth-options">
            <span>New User? <a href="/signup">Signup</a></span>
            <span><a href="#">Forgot your password?</a></span>
          </p>
        </div>
      </div>
      <button className="close-button" onClick={onClose}>X</button>
    </div>
  );
};

export default Login;
