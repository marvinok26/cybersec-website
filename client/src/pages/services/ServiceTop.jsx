import React, { useEffect, useRef, useState } from 'react';

// Import images
import osH31 from '../home/images/services/services-1.jpg';
import osH32 from '../home/images/services/services-2.jpg';
import osH33 from '../home/images/services/services-3.jpg';

const ServiceTop = () => {
  
  const [isInView, setIsInView] = useState(false);
  const [projectSuccess, setProjectSuccess] = useState(0);
  const [happyClients, setHappyClients] = useState(0);
  const sectionRef = useRef(null);

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

  

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Activate when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      // Simulate counter for Project Success
      const successInterval = setInterval(() => {
        setProjectSuccess((prev) => (prev < 98 ? prev + 1 : 98));
      }, 20);

      // Simulate counter for Happy Clients
      const clientsInterval = setInterval(() => {
        setHappyClients((prev) => (prev < 63 ? prev + 1 : 63));
      }, 30);

      return () => {
        clearInterval(successInterval);
        clearInterval(clientsInterval);
      };
    }
  }, [isInView]);

  return (
    <div  ref={sectionRef}>
      {/* Optimize Solutions */}
      <section className="pb-[1rem]">
        <div className="container mx-auto">
          <div className="flex flex-wrap relative z-10 mb-14">
            <div className="w-full md:w-2/3">
              <div className="w-[650px] mr-[13%]">
                <span className="text-[#2DB1A3] font-man text-2xl">Optimized Security Solutions</span>
                <h2 className="text-5xl font-bold mt-4">
                  Comprehensive Protection for your <span className="text-[#e3364d] text-5xl font-bold">Business</span>
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="ml-[12%] mt-[-2px] mr-8">
                <p className="text-[#1c1c1c] mb-6">Metrics for improving your site's performance over time security measures like systems</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="icon-Check bg-[#e3364d] text-white p-2 rounded-full mr-4"></i>
                    <p className="font-man text-[#1c1c1c] text-base">Professional Team Member</p>
                  </li>
                  <li className="flex items-center">
                    <i className="icon-Check bg-[#e3364d] text-white p-2 rounded-full mr-4"></i>
                    <p className="font-man text-[#1c1c1c] text-base">Awards Winning IT Solutions Company</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap relative z-10 -mx-8">
            {[
              {
                imgSrc: osH31,
                category: 'Startup Business',
                number: '1',
                title: 'Defense Arsenal Unveiling Our Cyber Security Suite',
              },
              {
                imgSrc: osH32,
                category: 'Small Business',
                number: '2',
                title: 'Fortified Protection Explore Our Robust Security Features',
              },
              {
                imgSrc: osH33,
                category: 'Entrepreneur',
                number: '3',
                title: 'Empowering Digital Safety at Every Level Protection',
              },
            ].map((item, index) => (
              <div className="w-full md:w-1/3 " key={index}>
                <div className="bg-[#1c1c1c] p-6 ">
                  <p href="#" className="block mb-4 overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.category}
                      className="transform transition-transform duration-300 ease-in-out hover:scale-110" // hover effect
                    />
                  </p>
                  <div className="text-white">
                    <span className="block text-sm mb-2 text-[#2DB1A3]">{item.category}</span>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold mr-4 text-[#2DB1A3]">{item.number}</span>
                      <h3 className="text-xl ">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      
    </div>
  );
};

export default ServiceTop;
