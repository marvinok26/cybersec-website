import React, { useEffect, useState, useRef } from 'react';
import { FaUserTie, FaHandsHelping, FaCogs, FaWrench, FaCheck } from 'react-icons/fa';
import CountUp from 'react-countup';
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

  const images = [
    { src: image1, alt: 'cyber security', marginTop: '2rem' },
    { src: image2, alt: 'cyber security', marginTop: '7rem' },
    { src: image3, alt: 'cybersecurity revenue boost', marginTop: '5rem' },
    { src: image4, alt: 'on point protection', marginTop: '1rem' },
    { src: image5, alt: 'networking', marginTop: '2rem' },
  ];

  const listItems = [
    'Professional Team Member',
    'Award-Winning IT Solutions Company',
    'Dedicated Tech Services',
  ];

  const cardData = [
    { icon: <FaUserTie className='text-[#2DB1A3]' />, title: 'Passionate',
      description: 'Our team is committed to bringing enthusiasm and creativity to every project, delivering innovative technology solutions that truly make a difference for our clients.'
    },
    { icon: <FaHandsHelping className='text-[#2DB1A3]' />, title: 'Respectful',
      description: 'We value every client relationship, listening carefully to your needs and treating each project with the utmost respect and professionalism to build lasting partnerships'
    },
    { icon: <FaCogs className='text-[#2DB1A3]' />, title: 'Ownership',
      description: 'We believe in taking responsibility for our work, ensuring quality and accountability in everything we do to deliver the best results for our clients'
    },
    { icon: <FaWrench className='text-[#2DB1A3]' />, title: 'Client Services',
      description: 'Our goal is to provide exceptional support tailored to your needs, guiding you through challenges and ensuring you have the best technology solutions available'
    },
  ];

  return (
    <div className="relative">
      {/* Main About Us Section */}
      <div className="bg-[#1c1c1c] mt-[5rem] relative overflow-hidden h-[600px] md:h-[100vh]">
        {/* Title */}
        <h1 className="text-[2.5rem] font-extrabold mb-6 text-white text-left w-[600px] py-4 sm:mt-[10rem] sm:mb-[10rem]">
          We specialize in delivering <span className='text-[#e3364d]'>Comprehensive</span> IT integration, Cybersecurity, and Cloud solutions.
        </h1>

        {/* Images in a row with different vertical placements */}
        <div className="flex flex-row gap-4 justify-center">
          {images.map((img, index) => (
            <div key={index} className={`h-72 w-1/5 mt-[${img.marginTop}]`}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto my-8">
        <div className="flex flex-wrap justify-center">
          {/* About Us Content */}
          <div className="w-full md:w-1/2 xl:w-1/3">
            <div className="px-6 pt-9">
              <div className="mb-7">
                <span className="text-[#2DB1A3] font-semibold">About Company</span>
                <h2 className="text-4xl font-bold mt-2">
                  Ensure your business safety with help from <span className="text-[#e3364d]">Alamat</span>
                </h2>
              </div>
              <ul className="space-y-5 mb-11">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheck className="mr-3 text-[#e3364d]" />
                    <p className="font-medium">{item}</p>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-block bg-[#2DB1A3] text-white px-6 py-2 rounded hover:bg-[#31d2c2]">
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
                className="h-[400px] w-full object-cover"
              />
            </div>
          </div>

          {/* About Us Counter */}
          <div className="w-full xl:w-1/3" ref={counterRef}>
            <div className="px-6 pt-10">
              <h3 className="text-3xl font-bold mb-3 text-left">
                We’ve <a href="#" className="text-[#e3364d]">25+ Years</a> Of Experience In Tech Services
              </h3>
              <p className="mb-10 text-left">
                Helping businesses thrive by providing reliable technology solutions and dedicated support to meet their unique needs
              </p>
              <div className="h-px bg-gray-300 mb-16"></div>
              <div className="flex justify-around">
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

      {/* Mission & Vision */}
      <div className="bg-[#1c1c1c] text-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Mission Section */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold text-left mb-6 text-[#e3364d]">Our Mission</h2>
              <p className="text-gray-300 leading-[1.5] text-left">
                Empowering businesses with innovative cloud solutions and robust cybersecurity strategies. We provide secure, scalable infrastructure tailored to unique needs, driving efficiency and protecting against evolving threats in the digital world.
              </p>
            </div>

            {/* Vision Section */}
            <div className="md:w-1/2">
              <h2 className="text-4xl font-extrabold text-left mb-6 text-[#e3364d]">Our Vision</h2>
              <p className="text-gray-300 leading-[1.5] text-left">
                To be the trusted leader in cloud and cybersecurity, known for service excellence and strategic partnerships. We aim for a future where businesses thrive confidently, free from digital threats, leveraging cutting-edge technology to drive global innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="py-2 m-auto">
        <div className="w-full mx-auto">
          <div className="flex flex-wrap justify-center">
            {cardData.map((card, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/4 px-2">
                <div className="border border-solid border-gray-400 px-[32px] py-[40px] relative overflow-hidden group h-[320px] flex flex-col justify-between">
                  <div className="absolute left-0 right-0 bottom-[-100%] h-full w-full bg-gray-200 transition-all duration-300 ease-in-out z-1 group-hover:bottom-0"></div>
                  <div className="relative z-2 flex-grow">
                    <div className="text-[55px] text-primary">{card.icon}</div>
                    <h2 className="text-[24px] leading-[30px] mt-[15px] mb-[8px]">
                      <a href="#" className='text-[#e3364d]'>{card.title}</a>
                    </h2>
                    <p className="text-gray-600 leading-[1.5]">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

