import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './main-styles.css';

// Import images
import heroBg1 from './images/main-hero/hero-bg-1.jpg';
import heroBg2 from './images/main-hero/hero-bg-2.jpg';
import heroBg3 from './images/main-hero/hero-bg-3.jpg';
import shape1 from './images/main-hero/slides-shape-1.png';
import shape2 from './images/main-hero/slides-shape-2.png';
import shape3 from './images/main-hero/slides-shape-3.png';

// Slide data
const slides = [
  {
    id: 1,
    bgImage: heroBg1,
    subtitle: "WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!",
    title: "We Are Digital Agency & Tech Solution",
    description: "We are leading technology solutions providing company all over the world for over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.",
    buttonText: "Get Started",
    buttonLink: "/contact"
  },
  {
    id: 2,
    bgImage: heroBg2,
    subtitle: "WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!",
    title: "Excellent IT Services For Your Success",
    description: "We are leading technology solutions providing company all over the world for over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.",
    buttonText: "Get Started",
    buttonLink: "/contact"
  },
  {
    id: 3,
    bgImage: heroBg3,
    subtitle: "WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!",
    title: "Get The Best IT Solution From Us",
    description: "We are leading technology solutions providing company all over the world for over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.",
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
    <div className="relative overflow-hidden h-[600px] mt-[5rem]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.bgImage}
            alt={`Hero Background ${slide.id}`}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-40 "></div>
          <div className="absolute inset-0 flex items-center justify-start w-[800px] px-10 mt-[12rem]">
            <div className="text-white max-w-4xl space-y-6 z-20">
              <span className="block text-xl font-semibold text-yellow-400">
                {slide.subtitle}
              </span>
              <h1 className="text-5xl font-bold text-white">{slide.title}</h1>
              <p className="text-lg text-gray-300">{slide.description}</p>
              <Link
                to={slide.buttonLink}
                className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-500"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Shape Images (With higher z-index to ensure they are always on top) */}
      <div className="absolute top-16 left-8 animate-rotate z-30">
        <img src={shape1} alt="Decorative Shape 1" className="w-36 h-36" />
      </div>
      <div className="absolute top-[16%] left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <img src={shape2} alt="Decorative Shape 2" className="w-44 h-48" />
      </div>
      <div className="absolute bottom-10 left-1/4 transform -translate-x-1/4 animate-bounce z-30">
        <img src={shape3} alt="Decorative Shape 3" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default HeroSlider;
