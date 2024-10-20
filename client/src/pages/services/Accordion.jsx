import React, { useState } from 'react';

// Import images
import osH32 from '../home/images/services/services-2.jpg';

// Import React Icons
import { FaShieldAlt, FaCloudUploadAlt, FaUsersCog, FaNetworkWired } from 'react-icons/fa';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Accordion items array
  const accordionItems = [
    {
      id: 1,
      title: 'Cybersecurity Solutions',
      icon: <FaShieldAlt className="text-white text-[30px] mb-2" />,
      content: 'Our comprehensive cybersecurity strategies include vulnerability assessments, email security, and 24/7 monitoring to protect your organization from evolving threats.',
    },
    {
      id: 2,
      title: 'Cloud Solutions',
      icon: <FaCloudUploadAlt className="text-white text-[30px] mb-2" />,
      content: 'We specialize in Azure and AWS services, offering migration solutions, disaster recovery, and cloud optimization strategies to ensure your cloud infrastructure is robust and scalable.',
    },
    {
      id: 3,
      title: 'Office Automation & Collaboration',
      icon: <FaUsersCog className="text-white text-[30px] mb-2" />,
      content: 'Maximize productivity with our Microsoft 365 optimization, email migration services, and enhanced collaboration tools like Microsoft Teams and SharePoint.',
    },
    {
      id: 4,
      title: 'Datacenter & Networking Solutions',
      icon: <FaNetworkWired className="text-white text-[30px] mb-2" />,
      content: 'Our end-to-end datacenter solutions ensure your infrastructure is efficient, with high-performance servers, storage solutions, and a resilient network design.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Why Choose Us Section */}
      <section className="pb-8 wcus-home3 bb-blog py-4 px-8 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap lg:flex-nowrap">
            {/* Left Column */}
            <div className="lg:w-1/2">
              <div className="relative mr-6">
                <div className="flex gap-6 items-start">
                  <img src={osH32} alt="IT Services Overview" className="wcus-pt w-full lg:w-9/12 h-[300px] lg:h-[400px] object-cover mt-8" />
                  <img src={osH32} alt="Office Space" className="hidden lg:block absolute ml-64 w-1/3 h-auto object-cover" />
                </div>
                <div className="absolute bg-[#2DB1A3] text-white p-4 max-w-md w-full left-1/2 lg:left-[43%] bottom-[5%] flex transform -translate-x-1/2">
                  <div className="icon text-[50px] mr-6">
                    <FaShieldAlt className="text-white" />
                  </div>
                  <div className="content">
                    <h5 className="mb-2 text-black font-semibold">Certified Company</h5>
                    <p className="text-sm leading-5">Delivering innovative IT solutions for your business.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="heading-title mb-10">
                <h2 className="text-4xl font-bold leading-snug">
                  Innovative Strategies for Maximum <span className="text-[#e3364d]">Business Impact</span>
                </h2>
                <p className="text-lg mt-4">At Alamat Group Limited, we empower businesses with comprehensive IT solutions, tailored to meet the unique challenges of today's digital landscape.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {accordionItems.map((item, index) => (
                  <div className="cursor-pointer" key={item.id} onClick={() => toggleAccordion(index)}>
                    <div className="flex flex-col items-start bg-[#2DB1A3] p-4 hover:bg-[#4ccdc0] transition-all duration-300 ease-in-out rounded-md">
                      <div className="icon mb-2">
                        {item.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-black mb-2">{item.title}</h4>
                      {activeIndex === index && (
                        <p className="text-white text-sm">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accordion;
