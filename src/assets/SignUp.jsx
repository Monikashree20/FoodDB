import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css'; // Ensure this file contains styles for both Login and SignUp

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            // Make sure this URL matches your backend endpoint
            const response = await axios.post('http://localhost:3000/user', {
                name,
                email,
                password
            });
            console.log(response.data);
            setSuccess('Signup successful! Please log in.');
            setError('');
            window.alert('Signup successful! Redirecting to login...'); // Display popup message
            navigate('/login'); // Redirect to login page
        } catch (error) {
            setError('Signup failed. Please try again.');
            setSuccess('');
            console.error('Error signing up:', error);
        }
    };

    const handleClose = () => {
        navigate('/'); // Redirect to home page when the close button is clicked
    };

    return (
        <div className="overlay">
            <div className="login-slide-in">
                <div className="login-container">
                    <div className="left-side">
                        <div className="welcome-text">
                            <h1>Welcome to FOODZY</h1>
                            <p>Sign up to get amazing discounts and offers just for you.</p>
                        </div>
                    </div>
                    <div className="right-side">
                        <div className="auth-form">
                            <h2>Sign Up</h2>
                            <form onSubmit={handleSignup}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
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
                                <button type="submit" className="auth-button">Sign Up</button>
                            </form>
                            <p className="auth-options">
                                <span>Already have an account? <a href="/login">Sign In</a></span>
                            </p>
                        </div>
                    </div>
                    <button className="close-button" onClick={handleClose}>X</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
