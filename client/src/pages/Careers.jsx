import React from 'react';

const jobListings = [
  {
    title: 'Senior Cybersecurity Analyst',
    description: 'We are seeking an experienced cybersecurity analyst to join our team. The ideal candidate will have a strong background in threat analysis, incident response, and security operations.'
  },
  {
    title: 'Software Developer - Security Solutions',
    description: 'We are looking for a skilled software developer to design and implement security solutions for our clients. The candidate should have expertise in programming languages such as Java, Python, or C++.'
  },
  {
    title: 'Network Security Engineer',
    description: 'We have an opening for a network security engineer to design, implement, and maintain secure network infrastructure. The candidate should have hands-on experience with firewalls, VPNs, and intrusion detection systems.'
  },
  {
    title: 'Cybersecurity Consultant',
    description: 'We are hiring a cybersecurity consultant to provide expert advice and guidance to our clients. The candidate should have a deep understanding of industry best practices and regulatory compliance.'
  }
];

const Careers = () => {
  return (
    <div className="careers-container">
      <h1>Join Our Team</h1>
      <p>Explore our current job openings and apply to become part of our dynamic team.</p>
      <p>Currently no positions available</p>
      
      {/* <div className="job-listings">
        {jobListings.map((job, index) => (
          <div className="job-item" key={index}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <button>Apply Now</button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Careers;
