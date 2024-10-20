import React, { useRef } from 'react';

import aboutShape from '../home/images/about/about-shape.png';

import { FaDesktop, FaCloud, FaLock, FaNetworkWired, FaShieldAlt, FaRegChartBar, FaCode } from 'react-icons/fa';

const ServiceFeature = () => {
  const sectionRef = useRef(null);

  // Service data
  const servicesData = [
    { number: '01', icon: <FaRegChartBar className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Cybersecurity Solutions', description: 'We provide advanced cybersecurity services such as VAPT, email security, SOC, CTI, and more to protect your business from evolving digital threats.' },
    { number: '02', icon: <FaCloud className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Cloud Solutions', description: 'We offer comprehensive cloud services, including migration, cost optimization, and disaster recovery, ensuring your infrastructure is scalable and secure.' },
    { number: '03', icon: <FaLock className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Data Loss Prevention (DLP)', description: 'Implement robust DLP solutions to protect sensitive data across endpoint, network, and cloud environments.' },
    { number: '04', icon: <FaNetworkWired className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Datacenter and Networking Solutions', description: 'We design and manage state-of-the-art datacenters, ensuring robust, scalable infrastructure for your growing business needs.' },
    { number: '05', icon: <FaShieldAlt className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Firewall and Security Solutions', description: 'Protect your network from cyberattacks with advanced firewall solutions from top vendors like Fortinet and Sophos.' },
    { number: '06', icon: <FaDesktop className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Office Automation & Collaboration', description: 'Streamline your business with optimized Microsoft 365, Office 365, and enhanced collaboration tools like Microsoft Teams.' },
    { number: '07', icon: <FaRegChartBar className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Cyber Threat Intelligence (CTI)', description: 'Stay ahead of threats with actionable intelligence, monitoring risks from the internet, dark web, and threat feeds.' },
    { number: '08', icon: <FaCode className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Custom Business Solutions with Power Apps', description: 'Build tailored business applications with Power Apps, enhancing productivity and efficiency without extensive coding knowledge.' },
  ];


  return (
    <div ref={sectionRef}
    className="bg-white  relative"
      
      >
      {/* Feature Section */}
      <section className="feature-home2 mt-4 pb-[50px]">
        <div className="py-4 px-8 container mx-auto">
          <div className="row mb-8">
            <div className="col-lg-12">
              <div className="heading-title text-center max-w-[680px] mx-auto mb-10">
                <h1 className="text-[#2DB1A3] text-4xl font-sans">Popular Services</h1>
                <h2 className="mt-2 mb-20  text-xl">Services We Provide</h2>
              </div>
            </div>
          </div>

          <div className="feature-h2-wrap bg-[#F6F2ED] mx-[-80px] px-[80px] py-[70px] "
          aria-labelledby="partner-carousel-title"
          style={{
            backgroundImage: `url(${aboutShape})`,
            backgroundPosition: 'center bottom',
            backgroundSize: 'contain',  // Ensures the image is visible
            backgroundRepeat: 'no-repeat',
            minHeight: '800px' // Ensures the container has enough height to display the background image
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-85px] mb-[40px]">
              {servicesData.map((item, index) => (
                <div
                  className={`bg-[#ffffff] p-3 w-[290px] h-[300px] relative overflow-hidden group hover:text-white ${index < 4 ? 'mt-[-30px]' : ''
                    }`}
                  key={index}
                >
                  {/* Background hover overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-[#2DB1A3] transition-all duration-400 ease-in-out group-hover:h-full"></div>

                  {/* Main content */}
                  <a href="service-details.html" className={`relative z-10 flex flex-col justify-between h-full`}>
                    <div>
                      <div className="flex icon-box-wrap">
                        <span className="text-[2.5rem] font-bold text-black group-hover:text-black">{item.number}</span>
                        <div className="icons align-center mt-[2rem] ml-[60px]">{item.icon}</div>
                      </div>
                      <h3 className="title font-bold text-[1.5rem] text-black group-hover:text-white">{item.title}</h3>
                    </div>

                    {/* Description positioned near the bottom */}
                    <p className="description font-sans mb-3 group-hover:text-white">{item.description}</p>

                    <div className="icon-bottom">
                      <i className="icon-arrow-right"></i>
                    </div>
                  </a>
                </div>
              ))}
            </div>


            <div className="feature-cta-wrap flex flex-col items-center">
              {/* Title */}
              <div className="">
                <span className="text-lg font-semibold">Ready to Get Started?</span>
              </div>

              {/* Call to Action Button */}
              <a href="#" className="btn btn-[#e3364d] border-solid border-gray-300 border mt-6 py-2 px-4 rounded-md text-white bg-[#2DB1A3] hover:bg-[#32cbbc] transition">
                <span>Get Free Consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceFeature;
