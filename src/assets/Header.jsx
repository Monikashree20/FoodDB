import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import Login from './Login'; // Import the Login component

const Header = () => {
  const cart = useSelector((state) => state.carter.carter);
  const location = useLocation();
  const hideHeaderPaths = ['/profile', '/signup'];
  const [showLogin, setShowLogin] = useState(false); // State to control login form visibility

  if (hideHeaderPaths.includes(location.pathname)) {
    return null;
  }

  return (
    <>
      <header className='header1'>
        <h1 className='foodzy'>FOODZY</h1>
        <div className='head-right'>
          <Link to="/">Home</Link>
          <Link to="/food">Foods</Link>
          <Link to="/about">About</Link>
          <Link to="/cart">Cart: {cart.length}</Link>
          <button className="login-button" onClick={() => setShowLogin(true)}>Login</button>
        </div>
      </header>

      {showLogin && (
        <div className="overlay">
          <div className="login-slide-in">
            <Login onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
