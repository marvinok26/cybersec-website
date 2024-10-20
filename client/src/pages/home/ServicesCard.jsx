import React from "react";
import { Link } from "react-router-dom";
import services1 from './images/services/services-1.jpg';
import services2 from './images/services/services-2.jpg';
import services3 from './images/services/services-3.jpg';
import services4 from './images/services/services-4.jpg';
import servicesShape1 from './images/services/services-shape-1.png';
import servicesShape2 from './images/services/services-shape-2.png';

const ServicesCard = () => {
  return (
    <section className="bg-[#2f2f2f] pt-8 pb-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-[#2DB1A3] font-semibold text-lg block mb-3">OUR SOLUTIONS & SERVICES</span>
          <h2 className="text-white text-3xl font-bold">
            We Provide  
            <b className="text-[#c21b31]"> Quality Services </b>
          </h2>
          <p className="text-[#cdc4d9] mt-3 max-w-[600px] mx-auto">
            We are dedicated to staying ahead of the curve, ensuring that your business is protected against emerging threats and fully equipped to thrive in the digital landscape.
          </p>
        </div>

        {/* Services Cards */}
        <div className="flex flex-wrap ">
          {[
            {
              img: services1,
              title: "Cybersecurity",
              desc: "Pen-testing, email security, SOC, SIEM, SOAR, Cyber threat intelligence, Data loss prevention...",
            },
            {
              img: services2,
              title: "Cloud Solutions",
              desc: "Azure & AWS expertise, Architecture review, Cost mgt & optimization, Disaster recovery, Backup & Storage, BCP & SRT...",
            },
            {
              img: services3,
              title: "Office Automation",
              desc: "MS 365 & Office Optimization, Email migration, Power Apps & MS Copilot, Sharepoint, Training & Support...",
            },
            {
              img: services4,
              title: "Datacenter & Networking",
              desc: "Datacenter design & mgt, End to end datacenter solutions, Server & Storage solutions, Networking solutions...",
            },
          ].map((service, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4">
              <div className="services-item bg-[#2e2141] rounded-lg p-6 mb-6 transition-transform duration-300 hover:scale-105 h-[440px]">
                <div className="services-image overflow-hidden rounded-lg">
                  <Link to="/services">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110" 
                    />
                  </Link>
                </div>
                <div className="services-content p-6">
                  <h3 className="text-lg font-bold mb-4">
                    <Link to="/services" className="text-white hover:text-[#e3364d] transition-colors">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-[#cdc4d9]">{service.desc}</p>
                  <Link 
                    to="/services" 
                    className="services-btn mt-4 inline-block bg-gradient-to-r from-[#e3364d] to-[#c21b31] text-transparent bg-clip-text font-bold hover:pl-6 transition-all relative"
                  >
                    View More
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-0.5 bg-gradient-to-r from-[#e3364d] to-[#c21b31] opacity-0 transition-all duration-500"></span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Services Button */}
        <div className="services-all-btn text-center mt-6">
          <Link 
            to="/services" 
            className="default-btn bg-[#2DB1A3] text-white rounded-md p-3 hover:bg-[#33dac9] transition-colors duration-300"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
