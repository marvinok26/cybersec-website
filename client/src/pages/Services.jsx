import React from 'react';
import { FaShieldAlt, FaLock, FaCloud, FaUserShield, FaCogs, FaBug, FaBrain, FaProjectDiagram, FaCode } from 'react-icons/fa';

const servicesData = [
  {
    icon: <FaShieldAlt />,
    title: 'Network Security',
    description: 'Protect your network infrastructure from unauthorized access and ensure data integrity.'
  },
  {
    icon: <FaLock />,
    title: 'Data Encryption',
    description: 'Secure sensitive data with advanced encryption techniques to prevent unauthorized access.'
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Security',
    description: 'Ensure the safety of your cloud environments and services with our robust cloud security solutions.'
  },
  {
    icon: <FaUserShield />,
    title: 'Endpoint Security',
    description: 'Protect endpoint devices such as computers, mobile devices, and servers from cyber threats.'
  },
  {
    icon: <FaCogs />,
    title: 'Security Automation',
    description: 'Implement automated security measures to efficiently detect and respond to threats.'
  },
  {
    icon: <FaBug />,
    title: 'Application Security',
    description: 'Ensure your applications are secure from vulnerabilities through comprehensive security assessments.'
  }
];

const benefitsData = [
  {
    icon: <FaBrain />,
    title: 'Expertise',
    description: 'Our team consists of highly skilled professionals with extensive knowledge in cybersecurity.'
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Innovative Solutions',
    description: 'We utilize the latest technologies and innovative approaches to safeguard your business.'
  },
  {
    icon: <FaCode />,
    title: 'Custom Development',
    description: 'We offer tailored security solutions and software development to meet your specific needs.'
  }
];

const teamData = [
  {
    name: 'John Doe',
    position: 'Chief Security Officer',
    description: 'John leads our cybersecurity team with over 15 years of experience in the industry.'
  },
  {
    name: 'Jane Smith',
    position: 'Lead Security Analyst',
    description: 'Jane specializes in threat analysis and incident response, ensuring our clients are always protected.'
  },
  {
    name: 'Mike Johnson',
    position: 'Security Software Developer',
    description: 'Mike develops custom security software to address unique challenges faced by our clients.'
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>We offer a wide range of cybersecurity services to protect your business from various threats.</p>
      </div>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-item" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <div className="benefits-section">
        <h2>Why Choose Our Services</h2>
        <div className="benefits-list">
          {benefitsData.map((benefit, index) => (
            <div className="benefit-item" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
