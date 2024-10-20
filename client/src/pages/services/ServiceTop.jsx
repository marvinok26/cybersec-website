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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
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
      const successInterval = setInterval(() => {
        setProjectSuccess((prev) => (prev < 98 ? prev + 1 : 98));
      }, 20);

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
    <section className="pb-10" ref={sectionRef}>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row mb-14">
          <div className="w-full md:w-2/3">
            <header className="mr-[13%]">
              <h2 className="text-[#2DB1A3] text-2xl">Optimized Security Solutions</h2>
              <h1 className="text-5xl font-bold mt-4">
                Comprehensive Protection for your 
                <span className="text-[#e3364d]"> Business</span>
              </h1>
            </header>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <div className="ml-[12%]">
              <p className="text-[#1c1c1c] mb-6">
                Metrics for improving your business performance over time with secure systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <i className="icon-Check bg-[#2DB1A3] text-white p-2 rounded-full mr-4"></i>
                  <p className="text-[#1c1c1c] text-base">Professional Team Members</p>
                </li>
                <li className="flex items-center">
                  <i className="icon-Check bg-[#2DB1A3] text-white p-2 rounded-full mr-4"></i>
                  <p className="text-[#1c1c1c] text-base">Award-Winning IT Solutions Company</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="bg-[#2f2f2f] w-full flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mx-0 p-0">

          {[
            {
              imgSrc: osH31,
              category: 'Startup Business',
              number: '1',
              title: 'Confidence: Innovative Security for Emerging Ventures',
            },
            {
              imgSrc: osH32,
              category: 'Small Business',
              number: '2',
              title: 'Strength in Security: Safeguard Your Digital Future',
            },
            {
              imgSrc: osH33,
              category: 'Enterprise',
              number: '3',
              title: 'Unbreakable: Advanced Cyber Defense for Complex Networks',
            },
          ].map((item, index) => (
            <div className="w-full md:w-1/3" key={index}>
              <div className=" p-6 transition-all duration-300 ease-in-out transform hover:scale-105">
                <div className="overflow-hidden mb-4">
                  <img
                    src={item.imgSrc}
                    alt={`Cybersecurity solutions for ${item.category}`}
                    className="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                    loading="lazy" // Lazy load for better performance
                  />
                </div>
                {/* Fixed content height */}
                <div className="text-white flex flex-col justify-between">
                  <span className=" text-sm  text-[#2DB1A3]">{item.category}</span>
                  <div className="flex items-center mb-2">
                    <span className="text-3xl font-bold mr-4 text-[#e3364d]">{item.number}</span>
                    <h3 className="text-xl">{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTop;
