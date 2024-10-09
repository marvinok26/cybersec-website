import React, { useEffect, useRef, useState } from 'react';

// Import images
import osH31 from '../home/images/services/services-1.jpg';

// Import components
import ServiceTop from './ServiceTop';
import ServiceFeature from './ServiceFeature';

const ServiceFeature2 = () => {
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
    <div>
      {/* Feature Section */}
      <section className="pb-[130px] feature-home3">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="feature-h3-content">
                <div className="mb-[60px]">
                  <span className="text-[#2DB1A3] font-man text-2xl">Cyber Security Solutions</span>
                  <h2 className="text-4xl font-bold mt-4">
                    Highly Tailored IT Design, Management & Support{" "}
                    <span className="text-[#e3364d] text-4xl">Services</span>
                  </h2>
                </div>
                <div id="accordionExample">
                  {/* Accordion Items */}
                  <div className="accordion">
                    {accordionItems.map((item) => (
                      <div className="accordion-item" key={item.id}>
                        <h5 className="accordion-header">
                          <button
                            className={`accordion-button ${activeIndex === item.id ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => toggleAccordion(item.id)} // Set active item
                          >
                            {item.title}
                          </button>
                        </h5>
                        <div
                          className={`accordion-collapse ${activeIndex === item.id ? 'show' : 'collapse'}`}
                          aria-expanded={activeIndex === item.id}
                        >
                          <div className="accordion-body">
                            {item.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2" ref={sectionRef}>
              <div className="relative feature-h3-image">
                {/* Increase the height of the image */}
                <img src={osH31} alt="Cyber Security Solutions" className="h-[500px] object-cover" />

                <div className="bg-[#2DB1A3] absolute left-[-18.2%] bottom-[4.8%] p-[40px]">
                  <div className="flex flex-col space-y-[40px]">
                    <div className="flex items-center space-x-6 border-b border-white pb-4">
                      <div className="progress-skill">
                        <canvas width="60px" className="chart2" data-percent="68">
                          <i className="text-3xl text-white"></i>
                        </canvas>
                      </div>
                      <div>
                        <span className="text-4xl font-semibold text-white">{projectSuccess}%</span>
                        <h5 className="text-white">Project Success</h5>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6">
                      <div className="progress-skill">
                        <canvas width="65px" className="chart2" data-percent="93">
                          <i className="text-3xl text-white"></i>
                        </canvas>
                      </div>
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
        </div>
      </section>
    </div>
  );
};

export default ServiceFeature2;
