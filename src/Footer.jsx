import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section company-info">
          <h2 className="footer-logo">Foodzy</h2>
          <p>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#swiggy-one">Swiggy One</a></li>
            <li><a href="#instamart">Swiggy Instamart</a></li>
            <li><a href="#genie">Swiggy Genie</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact us</h3>
          <ul>
            <li><a href="#help-support">Help & Support</a></li>
            <li><a href="#partner">Partner with us</a></li>
            <li><a href="#ride">Ride with us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#cookie">Cookie Policy</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#investor">Investor Relations</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>We deliver to:</h3>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>More cities</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
