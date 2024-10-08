import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import chooseImage1 from './images/choose/choose-1.png';
import chooseImage2 from './images/choose/choose-2.png';
import chooseImage3 from './images/choose/choose-3.png';
import chooseImage4 from './images/choose/choose-4.png';
import chooseShape1 from './images/choose/choose-shape.png';
import chooseShape2 from './images/choose/choose-shape-2.png';

const partnerLogos = [
  chooseImage1,
  chooseImage2,
  chooseImage3,
  chooseImage4,
  chooseImage1,
  chooseImage2,
  chooseImage3,
  chooseImage4,
  chooseImage1,
  chooseImage2,
  chooseImage3,
];

const PartnerCarousel = () => {
  const [visibleLogos, setVisibleLogos] = useState([0, 1, 2, 3]); // Initially display first 4 logos
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update the visible logos periodically (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partnerLogos.length);
      updateVisibleLogos();
    }, 3000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [currentIndex]);

  // Update visible logos based on the current index
  const updateVisibleLogos = () => {
    const newVisibleLogos = [];
    for (let i = 0; i < 4; i++) {
      newVisibleLogos.push((currentIndex + i) % partnerLogos.length);
    }
    setVisibleLogos(newVisibleLogos);
  };

  return (
    <div className="partner-carousel container mx-auto py-12">
      <div className="flex justify-center items-center space-x-4">
        {visibleLogos.map((logoIndex) => (
          <div key={logoIndex} className="partner-logo transition-transform duration-500">
            <img
              src={partnerLogos[logoIndex]}
              alt={`Partner Logo ${logoIndex + 1}`}
              className="w-[140px] h-[150px] object-cover transition-transform hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="choose-area pt-24 pb-20 relative z-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="section-title text-center mb-12">
          <span className="text-main font-semibold text-lg mb-3 block">WHY CHOOSE US</span>
          <h2 className="text-3xl mb-0 leading-snug relative">
            Our commitment to <b className="bg-gradient-to-r from-[#2db1a3] to-[#e65369] text-transparent bg-clip-text">Excellence</b> is Reflected in Every Project
          </h2>
          <p className="mt-3">
            We prioritize the security and success of our clients by delivering tailored IT solutions that not only meet industry standards but also exceed expectations.
          </p>
        </div>

        {/* Move Partner Carousel here, below the text content */}
        <PartnerCarousel />
      </div>

      {/* Shape Images */}
      <div className="choose-shape-1 absolute left-0 right-0 mx-auto bottom-12 z-0"> {/* Changed z-index to 0 */}
        <img src={chooseShape1} alt="shape" className="w-full" />
      </div>
      <div className="choose-shape-2 absolute left-0 right-0 mx-auto top-[-300px] z-0"> {/* Changed z-index to 0 */}
        <img src={chooseShape2} alt="shape" className="w-full" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
