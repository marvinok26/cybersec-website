import React, { useEffect, useRef, useState } from 'react';

import { FaDesktop, FaCloud, FaLock, FaNetworkWired, FaShieldAlt, FaRegChartBar, FaCode, FaRocket } from 'react-icons/fa';


import './services.css'

// Import images
import osH31 from '../home/images/services/services-1.jpg';
import osH32 from '../home/images/services/services-2.jpg';
import osH33 from '../home/images/services/services-3.jpg';
import avt1 from '../home/images/choose/choose-1.png';
import avt2 from '../home/images/choose/choose-2.png';
import avt3 from '../home/images/choose/choose-3.png';
import avt4 from '../home/images/choose/choose-4.png';



const Services = () => {

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
    <div className='py-4 px-8'>
      {/* Optimize Solutions */}
      <section className="pb-[1rem]">
        <div className="container mx-auto">
          <div className="flex flex-wrap relative z-10 mb-14">
            <div className="w-full md:w-2/3">
              <div className="w-[650px] mr-[13%]">
                <span className="text-blue-500 font-man text-2xl">Optimized Security Solutions</span>
                <h2 className="text-5xl font-bold">
                  Comprehensive Protection for your <span className="text-blue-500 text-5xl font-bold">Business</span>
                </h2>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="ml-[12%] mt-[-2px] mr-8">
                <p className="text-black mb-6">Metrics for improving your site's performance over time security measures like systems</p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <i className="icon-Check bg-blue-500 text-white p-2 rounded-full mr-4"></i>
                    <p className="font-man text-black text-base">Professional Team Member</p>
                  </li>
                  <li className="flex items-center">
                    <i className="icon-Check bg-blue-500 text-white p-2 rounded-full mr-4"></i>
                    <p className="font-man text-black text-base">Awards Winning IT Solutions Company</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap relative z-10">
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
              <div className="w-full md:w-1/3" key={index}>
                <div className="bg-cyan-50 p-6">
                  <a href="#" className="block mb-4 overflow-hidden">
                    <img
                      src={item.imgSrc}
                      alt={item.category}
                      className="transform transition-transform duration-300 ease-in-out hover:scale-110" // Added hover effect
                    />
                  </a>
                  <div className="text-white">
                    <span className="block text-sm mb-2">{item.category}</span>
                    <div className="flex items-center">
                      <span className="text-3xl font-bold mr-4">{item.number}</span>
                      <h3 className="text-xl">
                        <a href="#" className="hover:text-blue-500">{item.title}</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Feature */}
      <section className="feature-home2 pt-4 pb-[130px]">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading-title text-center max-w-[680px] mx-auto mb-[130px]">
                <span className="sub-title text-blue-500 font-sans">Popular Services</span>
                <h2 className="title">Services We Provide</h2>
              </div>
            </div>
          </div>

          <div className="feature-h2-wrap bg-[#F6F2ED] mx-[-80px] px-[80px] py-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[-70px] mb-[40px]">
              {[
                { number: '01', icon: <FaRegChartBar className="text-4xl text-black" />, title: 'Product Design', description: 'We approached AviaTech with complex project deliver' },
                { number: '02', icon: <FaCloud className="text-4xl text-black" />, title: 'IT Management', description: 'We approached AviaTech with complex project deliver' },
                { number: '03', icon: <FaLock className="text-4xl text-black" />, title: 'Data Security', description: 'We approached AviaTech with complex project deliver' },
                { number: '04', icon: <FaNetworkWired className="text-4xl text-black" />, title: 'Infrastructure Plan', description: 'We approached AviaTech with complex project deliver' },
                { number: '05', icon: <FaShieldAlt className="text-4xl text-black" />, title: 'Firewall Advancement', description: 'We approached AviaTech with complex project deliver' },
                { number: '06', icon: <FaDesktop className="text-4xl text-black" />, title: 'Desktop Computing', description: 'We approached AviaTech with complex project deliver' },
                { number: '07', icon: <FaRegChartBar className="text-4xl text-black" />, title: 'Market Research', description: 'We approached AviaTech with complex project deliver' },
                { number: '08', icon: <FaCode className="text-4xl text-black" />, title: 'Web Development', description: 'We approached AviaTech with complex project deliver' },
              ].map((item, index) => (
                <div
                  className="bg-white p-3 w-[290px] h-[300px] relative overflow-hidden group"
                  key={index}
                >
                  {/* Background hover overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-500 transition-all duration-400 ease-in-out group-hover:h-full"></div>

                  {/* Main content */}
                  <a href="service-details.html" className={`relative z-10 flex flex-col justify-between h-full`}>
                    <div>
                      <div className="flex icon-box-wrap">
                        <span className="text-[2.5rem] font-bold">{item.number}</span>
                        
                          <div className="icons align-center mt-[2rem] ml-[60px]">{item.icon}</div>
                        
                      </div>
                      <h3 className="title text-[2rem]">{item.title}</h3>
                    </div>

                    {/* Description positioned near the bottom */}
                    <p className="description font-sans mb-3">{item.description}</p>

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

              {/* Images and Text Side by Side */}
              <div className="images-and-text flex items-center space-x-6">
                {/* Images */}
                <ul className="image-list flex flex-row">
                  {[avt1, avt2, avt3, avt4].map((img, index) => (
                    <li key={index}>
                      <img src={img} alt={`Avatar ${index + 1}`} className="w-[40px] rounded-full" />
                    </li>
                  ))}
                </ul>

                {/* Text beside Images */}
                <div className="content text-left">
                  <p className="text-[12px] font-bold">Consultations to Our</p>
                  <p className="text-[12px] font-bold text-center">Expertise</p>
                </div>
              </div>

              {/* SVG Icon Below */}
              <div className="icon-shape">
                <svg width="124" height="5" viewBox="0 0 124 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M114.168 0.615385C111.478 0.5 108.742 0.384615 106.006 0.269231C105.125 0.230769 104.198 0.230769 103.317 0.192308C101.369 0.153846 99.4215 0.115385 97.4739 0.0769231C96.4073 0.0384615 95.2944 0.0384615 94.2278 0C93.9032 0 93.5786 0 93.3004 0C92.6048 0 91.9092 0 91.1673 0C87.9676 0 84.7679 0 81.5683 0C80.8263 0 80.038 0 79.2961 0.0384615C77.3948 0.0769231 75.5399 0.0769231 73.6387 0.115385C71.5056 0.153846 69.3725 0.153846 67.2393 0.192308C63.8078 0.269231 60.3299 0.346154 56.8984 0.423077C54.9044 0.461538 52.9104 0.5 50.9164 0.538462C47.4849 0.653846 44.0534 0.769231 40.6218 0.884615C38.7206 0.961538 36.8657 1 34.9645 1.07692C31.3938 1.26923 27.8232 1.42308 24.2525 1.61538C21.6819 1.80769 19.0784 2 16.4762 2C14.2059 2.15385 11.9357 2.23077 9.62869 2.5C6.70386 2.80769 3.77783 3.23077 0.903973 3.69231C0.61229 3.76923 0.318348 3.84615 0.0277365 3.92308C0.260048 4.15385 0.607794 4.30769 0.903973 4.38462C4.19563 5 7.68753 5 11.1522 5H112.235C115.626 5 119.017 5 122.408 4.84615C122.557 4.84615 122.706 4.84615 122.855 4.84615C123.033 4.80769 123.177 4.76923 123.396 4.61538C123.702 4.46154 123.97 4.23077 124.168 4Z"
                    fill="#0079E3"
                  />
                </svg>
              </div>

              {/* Call to Action Button */}
              <a href="#" className="btn btn-blue-500 border-blue-500 border mt-6 py-2 px-4 rounded-md text-white hover:bg-blue-600 transition">
                <span>Get Free Consultation</span>
              </a>
            </div>

          </div>
        </div>
      </section>



      {/* feature 3 */}
      <section className="pb-[130px] feature-home3">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
              <div className="feature-h3-content">
                <div className="mb-[60px]">
                  <span className="text-blue-600 font-man text-2xl">Cyber Security Solutions</span>
                  <h2 className="text-4xl font-bold">
                    Highly Tailored IT Design, Management & Support{" "}
                    <span className="text-blue-600 text-4xl">Services</span>
                  </h2>
                </div>
                <div id="accordionExample">
                  {/* Accordion Items */}
                  <div className="accordion" id="accordionExample">
      {/* First Accordion Item */}
      <div className="accordion" id="accordionExample">
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
            </div>

            <div className="w-full lg:w-1/2" ref={sectionRef}>
      <div className="relative feature-h3-image">
        {/* Increase the height of the image */}
        <img src={osH31} alt="Cyber Security Solutions" className="h-[500px] object-cover" />
        
        <div className="bg-indigo-500 absolute left-[-18.2%] bottom-[4.8%] p-[40px]">
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




      {/* Why Choose Us */}
      <section className="pb-[130px] wcus-home3 bb-blog">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2">
              <div className="relative mr-[60px]">
                <div className="flex gap-[30px] items-start">
                  <img src={osH32} alt="image" className="wcus-pt w-[70%] h-[300px] object-cover mt-[80px]" />
                  <img src={osH32} alt="image" className="w-[30%] h-auto object-cover" />
                </div>
                <div className="absolute bg-[#086AD8] text-white p-[18px] max-w-[335px] w-full left-[24.2%] bottom-[5.5%] flex">
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
                <span className="sub-title text-[#086AD8] font-man text-2xl">Why Choose Us</span>
                <h2 className="text-4xl font-bold">Innovative Strategies for Maximum <span className="text-[#086AD8] text-2xl">SEO Impact</span></h2>
                <p className="des">We are at the forefront of technological innovation, dedicated to providing comprehensive IT solutions that empower businesses</p>
              </div>
              <div className="flex flex-wrap">
                <div className="w-1/2">
                  <div className="icon-box-wcus">
                    <div className="icon text-[#086AD8] text-[50px] mb-[23px] ">
                      <i className="icon-icon-dev"></i>
                    </div>
                    <div className='bg-amber-400 mr-3 px-2 hover:bg-blue-400'>
                    <h4 className="text-[20px] font-semibold mb-[13px]">Robotics software</h4>
                    <p className="des">We are a dynamic and forward dedicated revolution</p>
                    </div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="icon-box-wcus">
                    <div className="icon text-[#086AD8] text-[50px] mb-[23px]">
                      <i className="icon-artificial-intelligence"></i>
                    </div>
                    <div className='bg-amber-400 px-2 hover:bg-blue-400'>
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



      {/* CTA */}
      <section class="py-[130px] bg-white service-cta">
        <div class="tf-container mx-auto px-4">
          <div class="flex flex-wrap items-center">
            {/* <!-- Text Section --> */}
            <div class="w-full md:w-7/12">
              <div class="heading-title space-y-4">
                <span class="sub-title text-blue-500 font-manrope text-lg">Get Consultations</span>
                <h2 class="title text-2xl font-bold mb-6">We believe in smart design, trust & collaboration.</h2>
                <a href="#" class="inline-block bg-[#D2A98E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#086AD8] transition-colors">
                  Read More
                  <i class="icon-angle-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
            {/* <!-- Image Section --> */}
            <div class="w-full md:w-5/12 mt-8 md:mt-0 relative">
              <div class="image-cta-service relative">
                <img src={osH33} alt="Experience" class="w-full pl-[110px] h-" />
                {/* <!-- Quote Feature --> */}
                <div class="w-[323px] h-[100px] bg-[#086ad8] absolute left-[120px] mb-[50px] mt-[-7rem] transform -translate-x-[50%] z-10 text-center">
                  <div class="counter tf-counters text-4xl font-bold text-white">25</div>
                  <span class="block text-white mt-2">Years Of Experience</span>
                  <div class="icon-svg mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 152 6">
                      <path d="M136.265 0.615385C133.055 0.5 129.789 0.384615 126.524 0.269231C125.472 0.230769 124.365 0.230769 123.314 0.192308C120.989 0.153846 118.664 0.115385 116.34 0.0769231C115.067 0.0384615 113.738 0.0384615 112.465 0C112.078 0 111.691 0 111.359 0C110.528 0 109.698 0 108.813 0C104.994 0 101.175 0 97.3557 0C96.4701 0 95.5292 0 94.6437 0.0384615C92.3744 0.0769231 90.1606 0.0769231 87.8913 0.115385C85.3454 0.153846 82.7994 0.153846 80.2534 0.192308C76.1577 0.269231 72.0067 0.346154 67.911 0.423077C65.5311 0.461538 63.1511 0.5 60.7712 0.538462C56.6755 0.653846 52.5798 0.769231 48.4841 0.884615C46.2149 0.961538 44.001 1 41.7318 1.07692C37.47 1.26923 33.2083 1.42308 28.9466 1.57692C26.6773 1.65385 24.4081 1.73077 22.1389 1.84615C17.9325 2.07692 13.6708 2.34615 9.46437 2.61538C8.57881 2.65385 7.63791 2.73077 6.69701 2.76923C4.9259 2.88462 3.09944 3.07692 1.27299 3.23077C1.16229 3.23077 1.0516 3.26923 0.940902 3.26923C0.719513 3.26923 0.553472 3.34615 0.38743 3.46154C0.110694 3.65385 0 3.88462 0 4.11539C0 4.34615 0.110694 4.57692 0.38743 4.73077C0.608819 4.88462 0.996249 5 1.27299 5C3.48687 4.84615 5.64541 4.65385 7.8593 4.5C9.90715 4.38462 11.955 4.26923 14.0028 4.15385C16.2167 4.03846 18.4306 3.88462 20.6998 3.76923C21.5854 3.73077 22.471 3.65385 23.4119 3.61538C26.8987 3.5 30.3303 3.34615 33.8171 3.23077C35.9757 3.15385 38.1342 3.07692 40.2927 3C41.1783 2.96154 42.0639 2.92308 42.9494 2.88462C46.3809 2.76923 49.8125 2.69231 53.244 2.57692C55.3472 2.53846 57.395 2.46154 59.4982 2.42308C60.2177 2.42308 60.8819 2.38462 61.6014 2.38462C65.3097 2.30769 69.0179 2.26923 72.7262 2.19231C74.774 2.15385 76.8772 2.11538 78.9251 2.07692C79.6446 2.07692 80.4195 2.03846 81.139 2.03846C84.9579 2 88.7769 2 92.6512 1.96154C95.0311 1.96154 97.411 1.92308 99.791 1.92308C103.831 1.92308 107.927 1.92308 111.967 1.96154C112.742 1.96154 113.572 2 114.347 2C117.177 2 120.007 2 122.852 2.11538C123.978 2.15385 125.138 2.23077 126.274 2.34615C130.088 2.61538 133.947 2.92308 137.81 3.23077C139.059 3.38462 140.307 3.61538 141.556 3.84615C144.953 4.38462 148.116 5 151.152 5" fill="#4F46E5" />
                    </svg>
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

export default Services;
