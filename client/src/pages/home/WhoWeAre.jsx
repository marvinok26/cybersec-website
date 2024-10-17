import React from "react";
import { Link } from "react-router-dom";

import aboutImage from './images/about/about-2.png';
import aboutShape from './images/about/about-shape.png';
import './main-styles.css'; // Import the external CSS

const WhoWeAre = () => {
  return (
    <>
      <div className="relative z-10 overflow-hidden pt-24 pb-24 about-area">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <div className="about-image">
                <img
                  src={aboutImage}
                  alt="image"
                  width={750}
                  height={642}
                  className="transition duration-300 ease-in-out"
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div
                className="about-content pl-10 relative z-10"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span className="text-lg text-main font-semibold mb-4 inline-block text-[#2DB1A3]">
                  WHO WE ARE
                </span>
                <h3 className="text-4xl mb-4 leading-snug relative">
                We are your trusted technology business partner
                </h3>
                <p className="mb-4">
                With a deep understanding of the digital challenges facing modern enterprises, we provide tailored services to secure and optimize your business operations.
                </p>
                <p className="mb-4">
                Our expertise spans advanced cybersecurity strategies, cutting-edge cloud solutions, and end-to-end data center and networking solutions. We are committed to helping businesses thrive in today’s digital age by providing secure, scalable, and efficient technology solutions.
                </p>
                <div className="about-btn mt-6">
                  <Link to="/about" className="default-btn text-[#ffffff]">
                    Know More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 right-0 mx-auto bottom-12 z-0 about-shape-1">
          <img
            src={aboutShape}
            alt="image"
            width={1920}
            height={612}
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
