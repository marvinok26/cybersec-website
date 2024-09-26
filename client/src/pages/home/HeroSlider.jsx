import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

import './main-styles.css'

// Import images
import heroBg1 from './images/main-hero/hero-bg-1.jpg';
import heroBg2 from './images/main-hero/hero-bg-2.jpg';
import heroBg3 from './images/main-hero/hero-bg-3.jpg';
import shape1 from './images/main-hero/slides-shape-1.png';
import shape2 from './images/main-hero/slides-shape-2.png';
import shape3 from './images/main-hero/slides-shape-3.png';

const HeroSlider = () => {
  return (
    <div className="relative mt-24 overflow-hidden">
      <Swiper
        spaceBetween={0}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-[600px]"
      >
        <SwiperSlide>
          <div 
            className="relative h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg1})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-start px-10">
              <div className="text-white max-w-4xl space-y-6 animate-slide-in-right">
                <span className="block text-xl font-semibold text-yellow-400">WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!</span>
                <h1 className="text-5xl font-bold">We Are Digital Agency & Tech Solution</h1>
                <p className="text-lg text-gray-300">
                  We are leading technology solutions providing company all over the world for over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.
                </p>
                <Link to="/contact" className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-500">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
            className="relative h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg2})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-start px-10">
              <div className="text-white max-w-4xl space-y-6 animate-slide-in-right">
                <span className="block text-xl font-semibold text-yellow-400">WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!</span>
                <h1 className="text-5xl font-bold">Excellent IT Services For Your Success</h1>
                <p className="text-lg text-gray-300">
                  We are leading technology solutions providing company all over the world for over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.
                </p>
                <Link to="/contact" className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-500">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div 
            className="relative h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg3})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-start px-10">
              <div className="text-white max-w-4xl space-y-6 animate-slide-in-right">
                <span className="block text-xl font-semibold text-yellow-400">WE ARE LEADING TECHNOLOGY SOLUTIONS PROVIDING COMPANY!</span>
                <h1 className="text-5xl font-bold">Get The Best IT Solution From Us</h1>
                <p className="text-lg text-gray-300">
                  We are leading technology solutions providing company all over the world for over 40 years. Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor.
                </p>
                <Link to="/contact" className="inline-block bg-yellow-400 text-black py-3 px-6 rounded-lg hover:bg-yellow-500">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Shape Images */}
      <div className="absolute top-16 left-8 animate-rotate">
        <img src={shape1} alt="Decorative Shape 1" className="w-36 h-36" />
      </div>
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <img src={shape2} alt="Decorative Shape 2" className="w-44 h-48" />
      </div>
      <div className="absolute bottom-10 left-1/4 transform -translate-x-1/4 animate-bounce">
        <img src={shape3} alt="Decorative Shape 3" className="w-12 h-12" />
      </div>
    </div>
  );
};

export default HeroSlider;
