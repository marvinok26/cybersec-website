import React, { useEffect, useRef, useState } from 'react';

// Import images
import osH32 from '../home/images/services/services-2.jpg';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Track the active accordion

  // Array of accordion items
  const accordionItems = [
    {
      id: 1,
      title: 'Network Security & Protection',
      content: 'Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team.',
    },
    {
      id: 2,
      title: 'Browser Safety & Farewell',
      content: 'Ensure the safety of browsing with world-class security teams. We’ll match you to remote teams.',
    },
    {
      id: 3,
      title: 'Infrastructure Technology',
      content: 'Build robust infrastructure with remote teams. We’ll match you to expert engineers.',
    },
    {
      id: 4,
      title: 'Management & Support Services',
      content: 'Get management and support services from world-class tech teams. We’ll match you with the best.',
    },
  ];

  // Function to toggle accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle between open and close
  };

  return (
    <div >
      {/* Why Choose Us */}
      <section className="pb-[1rem] wcus-home3 bb-blog">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2">
              <div className="relative mr-[60px]">
                <div className="flex gap-[30px] items-start">
                  <img src={osH32} alt="image" className="wcus-pt w-[90%] h-[400px] object-cover mt-[80px]" />
                  <img src={osH32} alt="image" className="mt-[2rem] absolute ml-[25rem] w-[30%] h-auto object-cover" />
                </div>
                <div className="absolute bg-[#2DB1A3] text-white p-[18px] max-w-[335px] w-full left-[43%] bottom-[2%] flex">
                  <div className="icon text-[50px] mr-[25px] mt-[7px]">
                    <i className="icon-medals-gif"></i>
                  </div>
                  <div className="content">
                    <h5 className="mb-[7px]">Certified Company</h5>
                    <p className="text-[13px] leading-[20px] text-white font-normal">Accelerate innovation with world match entire remote team</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 mt-[20px]">
              <div className="heading-title mb-[40px]">
                <span className="sub-title text-[#2DB1A3] font-man text-2xl">Why Choose Us</span>
                <h2 className="text-4xl font-bold my-3">
                  Innovative Strategies for Maximum <span className="text-[#e3364d] text-2xl">SEO Impact</span>
                </h2>
                <p className="des">We are at the forefront of technological innovation, dedicated to providing comprehensive IT solutions that empower businesses</p>
              </div>
              <div className="flex flex-wrap">
                <div className="w-1/2">
                  <div className="icon-box-wcusz">
                    <div className="icon text-[#e3364d] text-[50px] mb-[23px]">
                      <i className="icon-icon-dev"></i>
                    </div>
                    <div className='bg-[#2DB1A3] mr-3 px-2 hover:bg-[#55f7e7]'>
                      <h4 className="text-[20px] font-semibold mb-[13px]">Robotics software</h4>
                      <p className="des">We are a dynamic and forward dedicated revolution</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="icon-box-wcus">
                    <div className="icon text-[#e3364d] text-[50px] mb-[23px]">
                      <i className="icon-artificial-intelligence"></i>
                    </div>
                    <div className='bg-[#2DB1A3] px-2 hover:bg-[#55f7e7]'>
                      <h4 className="text-[20px] font-semibold mb-[13px]">Smart AI & chatbots</h4>
                      <p className="des">Passion lies creating solution not only meet but exceed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accordion;
