import React, { useState, useEffect } from "react";
import chooseImage1 from './images/choose/choose-1.png';
import chooseImage2 from './images/choose/choose-2.png';
import chooseImage3 from './images/choose/choose-3.png';
import chooseImage4 from './images/choose/choose-4.png';
import chooseShape1 from './images/choose/choose-shape.png';
import chooseShape2 from './images/choose/choose-shape-2.png';
import PartnerCarousel from "./PartnerCarousel";




const WhyChooseUs = () => {
  return (
    <div className="relative z-10 overflow-hidden pt-12 pb-20">
      <div className="container mx-auto w-[700px]">
        <div className="text-center mb-4 ">
          <span className="text-[#2DB1A3] font-semibold text-lg mb-3 block">WHY CHOOSE US</span>
          <h2 className="text-3xl mb-0 leading-snug relative font-jost font-black text-[#14042c]">
            Our commitment to <b className=" text-[#c21b31] ">Excellence</b> is Reflected in Every Project
          </h2>
          <p className="mt-3 text-[#646464] font-medium text-[16px] ">We prioritize the security and success of our clients by delivering tailored IT solutions that not only meet industry standards but also exceed expectations.</p>
        </div>

        
      </div>
      {/* Partner Carousel */}
      <PartnerCarousel className=" w-full"/>


      {/* Shape Images */}
      <div className="absolute left-0 right-0 mx-auto bottom-12 z-0">
        <img src={chooseShape1} alt="shape" className="w-full" />
      </div>
      <div className="absolute left-0 right-0 mx-auto -top-[300px] z-0">
        <img src={chooseShape2} alt="shape" className="w-full" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
