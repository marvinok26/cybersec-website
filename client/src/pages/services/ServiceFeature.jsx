import React, { useEffect, useRef, useState } from 'react';
import { FaDesktop, FaCloud, FaLock, FaNetworkWired, FaShieldAlt, FaRegChartBar, FaCode } from 'react-icons/fa';

const ServiceFeature = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const [projectSuccess, setProjectSuccess] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

  // Service data
  const servicesData = [
    { number: '01', icon: <FaRegChartBar className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Product Design', description: 'We approached AviaTech with complex project deliver' },
    { number: '02', icon: <FaCloud className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'IT Management', description: 'We approached AviaTech with complex project deliver' },
    { number: '03', icon: <FaLock className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Data Security', description: 'We approached AviaTech with complex project deliver' },
    { number: '04', icon: <FaNetworkWired className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Infrastructure Plan', description: 'We approached AviaTech with complex project deliver' },
    { number: '05', icon: <FaShieldAlt className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Firewall Advancement', description: 'We approached AviaTech with complex project deliver' },
    { number: '06', icon: <FaDesktop className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Desktop Computing', description: 'We approached AviaTech with complex project deliver' },
    { number: '07', icon: <FaRegChartBar className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Market Research', description: 'We approached AviaTech with complex project deliver' },
    { number: '08', icon: <FaCode className="text-4xl text-[#2DB1A3] group-hover:text-[#e3364d]" />, title: 'Web Development', description: 'We approached AviaTech with complex project deliver' },
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
    <div ref={sectionRef}>
      {/* Feature Section */}
      <section className="feature-home2 pt-4 pb-[130px]">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center max-w-[680px] mx-auto mb-[130px]">
                <h1 className="text-[#2DB1A3] text-4xl font-sans">Popular Services</h1>
                <h2 className="title">Services We Provide</h2>
              </div>
            </div>
          </div>

          <div className="feature-h2-wrap bg-[#F6F2ED] mx-[-80px] px-[80px] py-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-70px] mb-[40px]">
              {servicesData.map((item, index) => (
                <div
                  className="bg-white p-3 w-[290px] h-[300px] relative overflow-hidden group hover:text-white"
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
                      <h3 className="title text-[2rem] text-black group-hover:text-white">{item.title}</h3>
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
              <a href="#" className="btn btn-[#e3364d] border-solid border-gray-300 border mt-6 py-2 px-4 rounded-md text-white bg-[#e3364d] hover:bg-[#fa7385] transition">
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
