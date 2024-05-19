import React from 'react';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <div className="contact-details">
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <p>123 Main Street, Cityville, State, Country</p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <p>(123) 456-7890</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>info@example.com</p>
          </div>
        </div>
        <p>Have a question or inquiry? Feel free to reach out to us using the contact information above or fill out the form below.</p>
      </div>
      
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
