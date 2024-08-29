import React from 'react';

import logo from '../images/logo1.jpeg';
import teamImage1 from '../images/customer5.jpg';
import teamImage2 from '../images/customer6.jpg';
import teamImage3 from '../images/customer7.jpg';

import { PiCertificateFill } from "react-icons/pi";
import { BiSolidCertification } from "react-icons/bi";
import { GiTechnoHeart } from "react-icons/gi";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <img src={logo} alt="About us" className="about-image spin-logo" />
        <div className="about-text">
          <h1>ABOUT OUR COMPANY</h1>
          <p>
          We are a leading technology partner offering advanced cloud solutions and comprehensive cybersecurity services. We provide secure, scalable infrastructure to drive innovation and protect against evolving threats. Our expert team collaborates with clients to deliver tailored solutions that ensure seamless integration and support for digital transformation.
          </p>
        </div>
      </div>

      <div className="about-details">
        <div className="about-item">
          <PiCertificateFill className="about-icon" />
          <div>
            <h5>Industry Certified</h5>
            <p>We are out to dominate the cyber security market both locally and globally.</p>
          </div>
        </div>
        <div className="about-item">
          <BiSolidCertification className="about-icon" />
          <div>
            <h5>High Professional Members</h5>
            <p>Our cybersecurity professionals are trained to find weaknesses in databases, networks, and businesses.</p>
          </div>
        </div>
        <div className="about-item">
          <GiTechnoHeart className="about-icon" />
          <div>
            <h5>Infrastructure Integration Technology</h5>
            <p>Our integration infrastructure consists of a set of middleware technologies that provide advanced protection.</p>
          </div>
        </div>
      </div>

      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
        Our mission is to empower businesses with innovative cloud solutions and
robust cybersecurity strategies. We are committed to delivering secure,
scalable infrastructure that drives efficiency and protects against evolving
threats.
        </p>
      </div>

      {/* <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={teamImage1} alt="Team member" />
            <h5>John Doe</h5>
            <p>Chief Executive Officer</p>
          </div>
          <div className="team-member">
            <img src={teamImage2} alt="Team member" />
            <h5>Jane Smith</h5>
            <p>Chief Technology Officer</p>
          </div>
          <div className="team-member">
            <img src={teamImage3} alt="Team member" />
            <h5>Robert Brown</h5>
            <p>Lead Security Analyst</p>
          </div>
        </div>
      </div> */}

      {/* <div className="about-testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>
              "I've been working with these guys for a long time and I can say that my company is in the perfect hands."
            </p>
            <img src={cus1} alt="Customer 1" />
            <p className="customer-name">Allan Collins</p>
          </div>
          <div className="testimonial">
            <p>
              "Working with Alamat is just great, every network problem in my company is solved in a matter of days."
            </p>
            <img src={cus2} alt="Customer 2" />
            <p className="customer-name">Clay Washington</p>
          </div>
          <div className="testimonial">
            <p>
              "Once I was hacked and minutes later my data was already recovered, thanks to Alamat."
            </p>
            <img src={cus3} alt="Customer 3" />
            <p className="customer-name">Tanya Grant</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
