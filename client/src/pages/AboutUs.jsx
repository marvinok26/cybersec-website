import React, { useEffect, useState, useRef } from 'react';

import { FaUserTie, FaHandsHelping, FaCogs, FaWrench } from 'react-icons/fa'
import CountUp from 'react-countup';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdWorkOutline } from 'react-icons/md';

import { FaCheck, FaUsers, FaProjectDiagram } from 'react-icons/fa';
import image1 from '../images/abtImg1.jpg';
import image2 from '../images/abtImg2.jpg';
import image3 from '../images/abtImg3.jpg';
import image4 from '../images/abtImg4.png';
import image5 from '../images/abtImg5.jpg';

const About = () => {
  const [inView, setInView] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {/* Main About Us Section */}
      <div className="bg-[#0A1F32] m-auto">
        {/* Title */}

        <h1 className="text-[2.5rem] font-extrabold mb-6 w-[600px] max-w-3xl text-white">
          We specialize in delivering comprehensive IT integration, cybersecurity, and cloud solutions.
        </h1>


        {/* Images in a row with different vertical placements */}
        <div className="flex flex-row gap-4">
          <div className="h-72 w-1/5 mt-[2rem]">
            <img src={image1} alt="Description 1" className="w-full h-full object-cover" />
          </div>
          <div className="h-72 w-1/5 mt-[7rem]">
            <img src={image2} alt="Description 2" className="w-full h-full object-cover" />
          </div>
          <div className="h-72 w-1/5 mt-[5rem]">
            <img src={image3} alt="Description 3" className="w-full h-full object-cover" />
          </div>
          <div className="h-72 w-1/5 mt-[1rem]">
            <img src={image4} alt="Description 4" className="w-full h-full object-cover" />
          </div>
          <div className="h-72 w-1/5 mt-[6rem]">
            <img src={image5} alt="Description 5" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="container mx-auto my-8">
        <div className="flex flex-wrap">
          {/* About Us Content */}
          <div className="w-full md:w-1/2 xl:w-1/3">
            <div className="px-6 pt-9">
              <div className="mb-7">
                <span className="text-blue-500 font-semibold">About Company</span>
                <h2 className="text-4xl font-bold mt-2">
                  Ensure your business safety with help from <span className="text-blue-500">Alamat</span>
                </h2>
              </div>
              <ul className="space-y-5 mb-11">
                <li className="flex items-center">
                  <FaCheck className="mr-3 text-blue-500" />
                  <p className="font-medium">Professional Team Member</p>
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-3 text-blue-500" />
                  <p className="font-medium">Awards Winning IT Solutions Company</p>
                </li>
                <li className="flex items-center">
                  <FaCheck className="mr-3 text-blue-500" />
                  <p className="font-medium">Dedicated Tech Services</p>
                </li>
              </ul>
              <a href="#" className="inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
                Read More
              </a>
            </div>
          </div>

          {/* About Us Image */}
          <div className="w-full md:w-1/2 xl:w-1/3">
            <div className="relative">
              <img
                src={image3}
                alt="Aviatech helping make your life easier"
                className="h-[400px] w-[350px]"
              />
            </div>
          </div>

          {/* About Us Counter */}
          <div className="w-full xl:w-1/3" ref={counterRef}>
            <div className="px-6 pt-10">
              <h3 className="text-3xl font-bold mb-3">
                We’ve <a href="#" className="text-blue-500">25+ Years</a> Of Experience <br /> In Tech Services
              </h3>
              <p className="mb-10">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
              <div className="h-px bg-gray-300 mb-16"></div>
              <div className="flex space-x-10">
                <div className="text-center">
                  <div className="text-4xl font-bold">
                    {inView && <CountUp start={0} end={56} duration={3} />}
                  </div>
                  <p className="mt-2">Satisfied Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold">
                    {inView && <CountUp start={0} end={8} duration={3} />}
                  </div>
                  <p className="mt-2">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="py-2 m-auto">
        <div className="w-full mx-auto">
          <div className="flex flex-wrap">

            {/* Passionate Card */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-0">
              <div className="border border-solid border-gray-400 px-[32px] py-[40px] relative overflow-hidden group h-[320px] flex flex-col justify-between">
                <div className="absolute left-0 right-0 bottom-[-100%] h-full w-full bg-gray-200 transition-all duration-300 ease-in-out z-1 group-hover:bottom-0"></div>
                <div className="relative z-2 flex-grow">
                  <div className="text-[55px] text-primary">
                    <FaUserTie />
                  </div>
                  <h2 className="text-[24px] leading-[30px] mt-[15px] mb-[8px]">
                    <a href="#">Passionate</a>
                  </h2>
                  <p className="text-gray-600 leading-[1.5]">Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque</p>
                </div>
              </div>
            </div>

            {/* Respectful Card */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-0">
              <div className="border border-solid border-gray-400 px-[32px] py-[40px] relative overflow-hidden group h-[320px] flex flex-col justify-between">
                <div className="absolute left-0 right-0 bottom-[-100%] h-full w-full bg-gray-200 transition-all duration-300 ease-in-out z-1 group-hover:bottom-0"></div>
                <div className="relative z-2 flex-grow">
                  <div className="text-[55px] text-primary">
                    <FaHandsHelping />
                  </div>
                  <h2 className="text-[24px] leading-[30px] mt-[15px] mb-[8px]">
                    <a href="#">Respectful</a>
                  </h2>
                  <p className="text-gray-600 leading-[1.5]">Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque</p>
                </div>
              </div>
            </div>

            {/* Ownership Card */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-0">
              <div className="border border-solid border-gray-400 px-[32px] py-[40px] relative overflow-hidden group h-[320px] flex flex-col justify-between">
                <div className="absolute left-0 right-0 bottom-[-100%] h-full w-full bg-gray-200 transition-all duration-300 ease-in-out z-1 group-hover:bottom-0"></div>
                <div className="relative z-2 flex-grow">
                  <div className="text-[55px] text-primary">
                    <FaCogs />
                  </div>
                  <h2 className="text-[24px] leading-[30px] mt-[15px] mb-[8px]">
                    <a href="#">Ownership</a>
                  </h2>
                  <p className="text-gray-600 leading-[1.5]">Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque</p>
                </div>
              </div>
            </div>

            {/* Clients Services Card */}
            <div className="w-full sm:w-1/2 lg:w-1/4 px-0">
              <div className="border border-solid border-gray-400 px-[32px] py-[40px] relative overflow-hidden group h-[320px] flex flex-col justify-between">
                <div className="absolute left-0 right-0 bottom-[-100%] h-full w-full bg-gray-200 transition-all duration-300 ease-in-out z-1 group-hover:bottom-0"></div>
                <div className="relative z-2 flex-grow">
                  <div className="text-[55px] text-primary">
                    <FaWrench />
                  </div>
                  <h2 className="text-[24px] leading-[30px] mt-[15px] mb-[8px]">
                    <a href="#">Client Services</a>
                  </h2>
                  <p className="text-gray-600 leading-[1.5]">Sed ut perspiciatis unde omnis natus voluptatem accusan doloremque</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
