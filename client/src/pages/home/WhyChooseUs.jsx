import React from "react";
import { Link } from "react-router-dom";

import chooseImage1 from './images/choose/choose-1.png';
import chooseImage2 from './images/choose/choose-2.png';
import chooseImage3 from './images/choose/choose-3.png';
import chooseImage4 from './images/choose/choose-4.png';
import chooseShape1 from './images/choose/choose-shape.png';
import chooseShape2 from './images/choose/choose-shape-2.png';

const WhyChooseUs = () => {
  return (
    <div className="choose-area pt-24 pb-20 relative z-10 overflow-hidden">
      <div className="container mx-auto">
        <div className="section-title text-center mb-12">
          <span className="text-main font-semibold text-lg mb-3 block">WHY CHOOSE US</span>
          <h2 className="text-3xl mb-0 leading-snug relative">
            We Help You To <b className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">Increase</b> Your Sale Through Solutions
          </h2>
          <p className="mt-3">
            We are leading technology solutions providing company all over the world doing over 40 years lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {[chooseImage1, chooseImage2, chooseImage3, chooseImage4].map((image, index) => (
            <div key={index} className="lg:w-1/4 sm:w-1/2 p-4">
              <div
                className="single-choose-card mb-6"
                data-aos="fade-up"
                data-aos-delay={`${(index + 1) * 10}`}
                data-aos-duration={`${600 + (index * 200)}`}
                data-aos-once="true"
              >
                <div className="choose-image mb-6 relative inline-block">
                  <Link to="/services/details">
                    <img
                      src={image}
                      alt={`Service ${index + 1}`}
                      className="w-[140px] h-[150px] object-cover"
                    />
                  </Link>
                </div>
                <div className="choose-content">
                  <h3 className="text-lg mb-4">
                    <Link to="/services/details" className="text-black hover:text-main">Service {index + 1}</Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet conset sadipscing elitr sed diam nonumy eirm od tempor invidunt ut labore.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shape Images */}
      <div className="choose-shape-1 absolute left-0 right-0 mx-auto bottom-12 z-[-1]">
        <img src={chooseShape1} alt="shape" className="w-full" />
      </div>
      <div className="choose-shape-2 absolute left-[200px] mx-auto top-[-300px] z-[-1]">
        <img src={chooseShape2} alt="shape" className="w-full" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
