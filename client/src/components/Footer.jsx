import React from 'react';
import '../index.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-row">
        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul className="links">
            <li><a href="services">Network Security</a></li>
            <li><a href="services">Data Encryption</a></li>
            <li><a href="services">Cloud Security</a></li>
            <li><a href="services">End-Point Security</a></li>
            <li><a href="services">Security Automation</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>RESOURCES</h4>
          <ul className="links">
            <li><a href="careers">Careers</a></li>
            <li><a href="about">Blogs</a></li>
            <li><a href="/">Themes</a></li>
            <li><a href="contact">Support</a></li>
            <li><a href="contact">Legals</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>COMMUNITY</h4>
          <ul className="links">
            <li><a href="about">Our Team</a></li>
            <li><a href="services">Why Alamat</a></li>
            <li><a href="careers">ICareers</a></li>
            <li><a href="about">News</a></li>
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
