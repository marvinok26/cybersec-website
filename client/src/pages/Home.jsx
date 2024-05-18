import React, { useState, useEffect } from 'react';

import headerImage1 from '../images/img10.jpeg';
import headerImage2 from '../images/img9.jpeg';
import headerImage3 from '../images/img3.jpg';
import aboutImage from '../images/img11.jpg';
import { PiCertificateFill } from "react-icons/pi";
import { BiSolidCertification } from "react-icons/bi";
import { GiTechnoHeart } from "react-icons/gi";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdOutlineLockPerson } from "react-icons/md";
import { BsPersonLock } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import {FaNetworkWired, FaLaptopCode } from 'react-icons/fa';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [headerImage1, headerImage2, headerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container1">
      <div className="home-contents">
        {/* Sliding text */}
        <div className="sliding-text">
          <h1>POWERFUL SECURITY SYSTEMS TO PROTECT YOUR BUSINESS.</h1>
          <p>Cyber security is the practice of defending computers, servers, mobile devices electronic systems, networks, and data from malicious attacks, its also known as information technology security or electronic information security.</p>
          <button className="btn-show__more">Show More</button>
        </div>

        {/* Image Slider */}
        <div className="header-image">
          <img src={images[currentImage]} alt={`Header Image ${currentImage + 1}`} />
        </div>
      </div>

      <div className="home-container2">
        <h1>TRUSTED BY MILLIONS OF CUSTOMERS</h1>
      </div>

      <div className="container3">
        {/* About section */}
        <img src={aboutImage} alt='About us' className="about-image"/>

        <div className="con3-content">
          <div className="con3-header">
            <h1>ABOUT OUR COMPANY</h1>
            <p>Cybersecurity companies are paid to manage the maintenance and support of all the systems within an enterprise network. All the functions, right from systems monitoring and security patching to recovering lost data and repairing corrupt systems, are handled by the cybersecurity company.</p>
          </div>

          <div className="con3-text">
            <div className="icon-text">
              <PiCertificateFill className="icon" />
              <div>
                <h5>Industry Certified</h5>
                <p>We are out to dominate the cyber security market both locally and globally.</p>
              </div>
            </div>
          </div>

          <div className="con3-text">
            <div className="icon-text">
              <BiSolidCertification className="icon" />
              <div>
                <h5>High Professional Members</h5>
                <p>Cybersecurity professionals are trained to find weaknesses in databases, networks, and business...</p>
              </div>
            </div>
          </div>

          <div className="con3-text">
            <div className="icon-text">
              <GiTechnoHeart className="icon" />
              <div>
                <h5>Infrastructure Integration Technology</h5>
                <p>The integration infrastructure consists of a set of middleware technologies that provide the...</p>
              </div>
            </div>
          </div>
          
          <div className="con3-btn">
            <button className="btn-show__more">Show More</button>
          </div>
        </div>
      </div>
      <div className="numbers">
        {/* number */}
        <div className="number-item">
          <h5>6</h5>
          <p>YEARS WORKING EXPERIENCE</p>
        </div>

        <div className="number-item">
          <h5>250</h5>
          <p>PROFESSIONAL EXPERTS</p>
        </div>

        <div className="number-item">
          <h5>2.5K</h5>
          <p>ACTIVE CUSTOMERS LOCALLY</p>
        </div>

        <div className="number-item">
          <h5>4.7</h5>
          <p>RATES ON AVERAGE CUSTOMER</p>
        </div>
      </div>
      <div className="sec-solutions__section">
        {/* security solutions section */}
        <div className="sec-heading">
          <h4>OUR SECURITY SOLUTIONS</h4>
          <p>Our security is protection from or resilience against potential harm [or other unwanted coercive change] caused by others, by restraining the freedom of others to act. Beneficiaries of security may be persons and social groups, objects and institutions, ecosystems, or any other entity or phenomenon vulnerable to unwanted change.</p>
        </div>
        <div className="sec-solutions">
          {/* list of security solutions */}
          <div className="solution-item">
            <GrShieldSecurity className="solution-icon" />
            <h5>Network Security</h5>
            <p>Protect your network infrastructure from unauthorized access.</p>
          </div>
          <div className="solution-item">
            <MdOutlineLockPerson  className="solution-icon" />
            <h5>Data Encryption</h5>
            <p>Secure sensitive data with advanced encryption techniques.</p>
          </div>
          <div className="solution-item">
            <FaNetworkWired className="solution-icon" />
            <h5>Cloud Security</h5>
            <p>Ensure the safety of your cloud environments and services.</p>
          </div>
          <div className="solution-item">
            <BsPersonLock className="solution-icon" />
            <h5>Endpoint Security</h5>
            <p>Protect endpoint devices from cyber threats.</p>
          </div>
          <div className="solution-item">
            <TbSettingsAutomation className="solution-icon" />
            <h5>Security Automation</h5>
            <p>Defend against viruses, trojans, and other malware.</p>
          </div>
          <div className="solution-item">
            <FaLaptopCode className="solution-icon" />
            <h5>Application Security</h5>
            <p>Ensure your applications are secure from vulnerabilities.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;