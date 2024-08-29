import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import headerImage1 from '../images/img10.jpeg';
import headerImage2 from '../images/img9.jpeg';
import headerImage3 from '../images/img3.jpg';
import aboutImage from '../images/img11.jpg';
import chooseImage from '../images/img5.jpg';

import { PiCertificateFill } from "react-icons/pi";
import { BiSolidCertification } from "react-icons/bi";
import { GiTechnoHeart } from "react-icons/gi";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdOutlineLockPerson } from "react-icons/md";
import { BsPersonLock } from "react-icons/bs";
import { GrShieldSecurity } from "react-icons/gr";
import { FaNetworkWired, FaLaptopCode } from 'react-icons/fa';
import { SiTicktick } from "react-icons/si";



const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [headerImage1, headerImage2, headerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home-container1">
      <div className="home-contents">
        {/* Sliding text */}
        <div className="sliding-text">
          <h1>DIGITAL TRANSFORMATION AND SECURE SOLUTIONS.</h1>
          <p>We are a leading technology partner specializing in advanced cloud solutions and cybersecurity. Our mission is to empower businesses with secure, scalable infrastructure for innovation and efficiency. By offering tailored solutions and robust security, we protect clients from threats and support their digital transformation journey.</p>
          <button className="btn-show__more"><Link to="services">Show More</Link> </button>
        </div>

        {/* Image Slider */}
        <div className="header-image">
          <img src={images[currentImage]} alt={`header ${currentImage + 1}`} />
        </div>
      </div>

      <div className="home-container2">
        <h1>YOUR PREMIER TECHNOLOGY PARTNER</h1>
      </div>

      <div className="container3">
        {/* About section */}
        <div className='con3-img'>
        <img src={aboutImage} alt="About us" className="about-image" />
        </div>

        <div className="con3-content">
          <div className="con3-header">
            <h1>ABOUT OUR COMPANY</h1>
            <p>We provide cutting-edge cloud solutions and cybersecurity services, offering secure, scalable infrastructure tailored to your needs. Our expert team ensures seamless integration, robust protection, and enhanced IT capabilities for digital transformation.</p>
          </div>

          <div className="con3-text">
            <div className="icon-text">
              <PiCertificateFill className="icon" />
              <div>
                <h5>Vision</h5>
                <p>To be the trusted leader in cloud and cybersecurity solutions,
                known for our excellence in service and strategic partnerships.</p>
              </div>
            </div>
          </div>

          <div className="con3-text">
            <div className="icon-text">
              <BiSolidCertification className="icon" />
              <div>
                <h5>Mission</h5>
                <p>To empower businesses with innovative cloud solutions and
                robust cybersecurity strategies.</p>
              </div>
            </div>
          </div>

          <div className="con3-text">
            <div className="icon-text">
              <GiTechnoHeart className="icon" />
              <div>
                <h5>Strategy</h5>
                <p>Delivering tailored, secure solutions to drive innovation, efficiency, and digital transformation.</p>
              </div>
            </div>
          </div>

          <div className="con3-btn">
            <button className="btn-show__more"><Link to="about" >Show More</Link></button>
          </div>
        </div>
      </div>

      {/* <div className="numbers"> */}
        {/* number */}
        {/* <div className="number-item">
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
      </div> */}

      <div className="sec-solutions__section">
        {/* security solutions section */}
        <div className="sec-heading">
          <h4>OUR SOLUTIONS</h4>
          <p>We deliver robust cybersecurity, scalable cloud solutions, and reliable server infrastructure tailored to meet the diverse needs of modern businesses. Our solutions safeguard your digital assets, enhance productivity, and ensure your IT environment is secure, efficient, and aligned with your strategic goals.</p>
        </div>
        <div className="sec-solutions">
          {/* list of security solutions */}
          <div className="solution-item">
            <GrShieldSecurity className="solution-icon" />
            <h5>Network Security</h5>
            <p>Protect your network infrastructure from unauthorized access.</p>
          </div>
          <div className="solution-item">
            <MdOutlineLockPerson className="solution-icon" />
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

      <div className="choose-section">
        {/* Choose Us */}
        <div className="choose-left__contents">
          <div className="choose-sec__header">
            <h4>WHY CHOOSE US?</h4>
            <p>As an industry-leading cyber security and cloud integrator, our core focus is the mitigation of information security risk for our clients.

Small enough to remain agile, large enough to apply a dedicated approach to each client experience</p>
          </div>
          <div className="choose-sec__content">
            <div className="reasons">
              <div className="reason-item"><SiTicktick /> Team players</div>
              <div className="reason-item"><SiTicktick /> Experienced staff</div>
              <div className="reason-item"><SiTicktick /> Flexible</div>
              <div className="reason-item"><SiTicktick />Fast decision-making</div>
              <div className="reason-item"><SiTicktick />Focussed</div>
              <div className="reason-item"><SiTicktick /> On-the-ground staff</div>
            </div>
            <div className="choose-btn">
              <button className="btn-show__more"><Link to="services"> Learn More </Link></button>
            </div>
          </div>
        </div>
        <div className="choose-img">
          <img src={chooseImage} alt="choose img" />
        </div>
      </div>

      {/* customer feedback */}
      {/* <div className="customer-feedback">
        <div className="section__container">
          <div className="feed-header">
            <h1>CUSTOMER FEEDBACK</h1>
            <p>TESTIMONIALS</p>
        
          </div>
          <div className="testimonials__grid">
            <div className="card">
              <span><i className="ri-double-quotes-l"></i></span>
              <p>
                  I've been working with these guys for a long time and I can say that
                my company is in the perfect hands.
              </p>
          <hr />
          <img src={cus1} alt="user" />
          <p className="name">Allan Collins</p>
        </div>
        <div className="card">
          <span><i className="ri-double-quotes-l"></i></span>
          <p>
            Working with Alamat is just great, every network problem in my company is
            solved in a matter of days.
          </p>
          <hr />
          <img src={cus2} alt="user" />
          <p className="name">Clay Washington</p>
        </div>
        <div className="card">
          <span><i className="ri-double-quotes-l"></i></span>
          <p>
            Once I was hacked and minutes later my data was already
            recovered, thanks to Alamat.
          </p>
          <hr />
          <img src={cus3} alt="user" />
          <p className="name">Tanya Grant</p>
        </div>
      </div>
    </div>
      </div> */}
    </div>
  );
}

export default Home;
