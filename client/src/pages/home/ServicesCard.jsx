import React from "react";
import { Link } from "react-router-dom";

import './main-styles.css'

import services1 from './images/services/services-1.jpg';
import services2 from './images/services/services-2.jpg';
import services3 from './images/services/services-3.jpg';
import services4 from './images/services/services-4.jpg';
import servicesShape1 from './images/services/services-shape-1.png';
import servicesShape2 from './images/services/services-shape-2.png';

const ServicesCard = () => {
  return (
    <div className="services-area bg-black pt-24 pb-24">
      <div className="container mx-auto">
        <div className="section-title text-center mb-10">
          <span className="text-main-color font-semibold">SERVICES</span>
          <h2 className="text-white">
            We Provide the Best Quality <b>Services</b>
          </h2>
          <p className="text-[#cdc4d9]">
            We are a technology solutions providing company all over the world
            for over 40 years. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="flex flex-wrap justify-center">
          {[
            {
              img: services1,
              title: "Software Development",
              desc: "Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…",
            },
            {
              img: services2,
              title: "App Development",
              desc: "Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…",
            },
            {
              img: services3,
              title: "Web Development",
              desc: "Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…",
            },
            {
              img: services4,
              title: "Analytic Solutions",
              desc: "Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…",
            },
          ].map((service, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4">
              <div className="services-item bg-[#2e2141] rounded-lg p-4 mb-6 transition-transform duration-300">
                <div className="services-image overflow-hidden rounded-lg">
                  <Link to="/services/details">
                    <img src={service.img} alt={service.title} className="transition-transform duration-300" />
                  </Link>
                </div>
                <div className="services-content p-6">
                  <h3 className="text-lg font-bold mb-4">
                    <Link to="/services/details" className="text-white">
                      {service.title}
                    </Link>
                  </h3>
                  <p className="text-[#cdc4d9] mb-0">{service.desc}</p>
                  <Link to="/services/details" className="services-btn mt-4 inline-block text-main-color font-bold">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-all-btn text-center mt-6">
          <Link to="/services/services" className="default-btn">
            Explore All Services
          </Link>
        </div>
      </div>

      {/* Shape Images */}
      <div className="services-shape-1 absolute top-20 left-5 animate-moveleftbounce">
        <img src={servicesShape1} alt="shape" width={230} height={272} />
      </div>
      <div className="services-shape-2 absolute top-10 right-5 animate-rotateme">
        <img src={servicesShape2} alt="shape" width={140} height={125} />
      </div>
    </div>
  );
};

export default ServicesCard;
