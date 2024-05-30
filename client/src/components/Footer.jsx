import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul className="links">
            <li><a href="#">Network Security</a></li>
            <li><a href="#">Data Encryption</a></li>
            <li><a href="#">Cloud Security</a></li>
            <li><a href="#">End-Point Security</a></li>
            <li><a href="#">Security Automation</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>RESOURCES</h4>
          <ul className="links">
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Legals</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>COMMUNITY</h4>
          <ul className="links">
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Why Alamat</a></li>
            <li><a href="#">ICareers</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Newsletter</h4>
          <p>
            Subscribe to our newsletter for a weekly dose
            of news, updates, helpful tips, and
            exclusive offers.
          </p>
          <form action="#">
            <input type="text" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
