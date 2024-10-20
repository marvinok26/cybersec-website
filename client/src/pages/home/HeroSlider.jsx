import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './main-styles.css'; 

// Import images
import heroBg1 from './images/main-hero/hero-bg-1.jpg';
import heroBg2 from './images/main-hero/hero-bg-2.jpg';
import heroBg3 from './images/main-hero/hero-bg-3.jpg';

const slides = [
  {
    id: 1,
    bgImage: heroBg1,
    subtitle: "WE ARE A LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY",
    title: "We deliver comprehensive IT integration, cybersecurity, and cloud solutions",
    description: "Our expertise spans across key areas, including advanced cybersecurity strategies, cutting-edge cloud services, robust office automation and collaboration tools, and end-to-end datacenter and networking solutions.",
    buttonText: "Get Started",
    buttonLink: "/contact"
  },
  {
    id: 2,
    bgImage: heroBg2,
    subtitle: "WE UNDERSTAND THE CHALLENGES FACED BY MODERN ENTERPRISES",
    title: "We provide customized solutions for your business operations",
    description: "Whether it’s building resilient Security Operation Centers (SOCs), migrating your infrastructure to the cloud, or designing and managing state-of-the-art datacenters, Alamat Group Limited is your trusted partner for success.",
    buttonText: "Get Started",
    buttonLink: "/contact"
  },
  {
    id: 3,
    bgImage: heroBg3,
    subtitle: "WE ARE DRIVEN BY INNOVATION & EXCELLENCE",
    title: "Leveraging industry-leading technologies from top vendors like Microsoft and more",
    description: "We are committed to helping you navigate the complexities of today’s IT landscape, ensuring that your organization is equipped to thrive in the digital age.",
    buttonText: "Get Started",
    buttonLink: "/contact"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000); // 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-[5rem] relative overflow-hidden h-[600px] md:h-[100vh]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.bgImage}
            alt={`Technology Solutions Slide ${slide.id}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-start px-4 sm:px-10  ">
            <div className="text-white w-[750px] space-y-6 z-20">
              <span className="block text-lg sm:text-xl font-semibold text-[#2DB1A3]">
                {slide.subtitle.split(' ').map((word, i) => (
                  <span
                    key={i}
                    className="inline-block opacity-0 animate-slide-in whitespace-nowrap"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-snug">
                {slide.title.split(' ').map((word, i) => (
                  <span
                    key={i}
                    className="inline-block opacity-0 animate-slide-in whitespace-nowrap"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    {word}&nbsp;
                  </span>
                ))}
              </h1>
              <p className="text-sm sm:text-lg text-gray-300">{slide.description}</p>
              <Link
                to={slide.buttonLink}
                className="inline-block bg-[#2DB1A3] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#3fd7c8] transition-all"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
