import React, { useEffect, useRef, useState } from 'react';

// Import images
import osH31 from '../home/images/services/services-1.jpg';
import { FaChartLine, FaUsers } from 'react-icons/fa';

const ServiceFeature2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const accordionItems = [
    {
      id: 1,
      title: 'Network Security & Protection',
      content: 'Accelerate innovation with world-class tech teams. We’ll match you to an entire remote team.',
    },
    {
      id: 2,
      title: 'Browser Safety & Firewall',
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

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const [projectSuccess, setProjectSuccess] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
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
    <section className="bg-[#2f2f2f] p-12 feature-home3 mb-4" ref={sectionRef}>
      <div className="py-4 container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <header className="mb-5">
              <h2 className="text-[#2DB1A3] text-2xl">Cyber Security Solutions</h2>
              <h1 className="text-4xl text-white font-bold mt-2">
                Highly Tailored IT Design, Management & Support 
                <span className="text-[#e3364d]"> Services</span>
              </h1>
            </header>
            <div id="accordionExample" className="accordion">
              {accordionItems.map((item) => (
                <article className="accordion-item" key={item.id}>
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        activeIndex === item.id ? 'bg-[#2DB1A3]' : 'collapsed'
                      } text-white border border-slate-600 rounded-md p-2.5 hover:bg-[#2DB1A3] transition-all duration-300`}
                      type="button"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={activeIndex === item.id}
                    >
                      {item.title}
                    </button>
                  </h5>
                  <div
                    className={`accordion-collapse ${activeIndex === item.id ? 'show' : 'collapse'} border border-[#2DB1A3] rounded-md p-4 transition-all duration-300`}
                    aria-hidden={activeIndex !== item.id}
                  >
                    {activeIndex === item.id && (
                      <div className="mb-2 border border-slate-400 p-4 bg-[#F6F2ED] w-[485px]">
                        {item.content}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <img
              src={osH31}
              alt="Cyber Security Solutions"
              className="h-[417px] max-w-full object-cover ml-4"
              loading="lazy" // Lazy loading for better performance
            />

            <div className="bg-[#2DB1A3] absolute left-[-10%] bottom-[4.8%] p-10">
              <div className="flex flex-col h-[220px] space-y-10">
                <div className="flex items-center space-x-6 border-b border-white pb-4">
                  <FaChartLine className="text-3xl text-white" />
                  <div>
                    <span className="text-4xl font-semibold text-white">{projectSuccess}%</span>
                    <h5 className="text-white">Project Success</h5>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <FaUsers className="text-3xl text-white" />
                  <div>
                    <span className="text-4xl font-semibold text-white">{happyClients}%</span>
                    <h5 className="text-white">Happy Clients</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeature2;
