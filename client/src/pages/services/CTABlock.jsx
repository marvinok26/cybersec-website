import React, { useEffect, useRef, useState } from 'react';

// Import images
import osH33 from '../home/images/services/services-3.jpg';

const CTABlock = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Activate when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef}>
      {/* CTA */}
      <section className="py-[130px] bg-white service-cta">
        <div className="tf-container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            {/* Text Section */}
            <div className="w-full md:w-7/12">
              <div className="heading-title space-y-4">
                <span className="sub-title text-[#e3364d] font-manrope text-lg">Get Consultations</span>
                <h2 className="title text-2xl font-bold mb-6">We believe in smart design, trust & collaboration.</h2>
                <a href="#" className="inline-block bg-[#D2A98E] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#e3364d] transition-colors">
                  Read More
                  <i className="icon-angle-right ml-2 text-sm"></i>
                </a>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-5/12 mt-8 md:mt-0 relative">
              <div className="image-cta-service relative">
                <img src={osH33} alt="Experience" className="w-full" />
                {/* Quote Feature */}
                <div className="w-[323px] h-[100px] bg-[#2DB1A3] absolute left-[120px] mb-[50px] mt-[-7rem] transform -translate-x-[50%] z-10 text-center">
                  <div className="counter tf-counters text-4xl font-bold text-white">25</div>
                  <span className="block text-white mt-2">Years Of Experience</span>
                  <div className="icon-svg mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 152 6">
                      <path d="M136.265 0.615385C133.055 0.5 129.789 0.384615 126.524 0.269231C125.472 0.230769 124.365 0.230769 123.314 0.192308C120.989 0.153846 118.664 0.115385 116.34 0.0769231C115.067 0.0384615 113.738 0.0384615 112.465 0C112.078 0 111.691 0 111.359 0C110.528 0 109.698 0 108.813 0C104.994 0 101.175 0 97.3557 0C96.4701 0 95.5292 0 94.6437 0.0384615C92.3744 0.0769231 90.1606 0.0769231 87.8913 0.115385C85.3454 0.153846 82.7994 0.153846 80.2534 0.192308C76.1577 0.269231 72.0067 0.346154 67.911 0.423077C65.5311 0.461538 63.1511 0.5 60.7712 0.538462C56.6755 0.653846 52.5798 0.769231 48.4841 0.884615C46.2149 0.961538 44.001 1 41.7318 1.07692C37.47 1.26923 33.2083 1.42308 28.9466 1.57692C26.6773 1.65385 24.4081 1.73077 22.1389 1.84615C17.9325 2.07692 13.6708 2.34615 9.46437 2.61538C8.57881 2.65385 7.63791 2.73077 6.69701 2.76923C4.9259 2.88462 3.09944 3.07692 1.27299 3.23077C1.16229 3.23077 1.0516 3.26923 0.940902 3.26923C0.719513 3.26923 0.553472 3.34615 0.38743 3.46154C0.110694 3.65385 0 3.88462 0 4.11539C0 4.34615 0.110694 4.57692 0.38743 4.73077C0.608819 4.88462 0.996249 5 1.27299 5C3.48687 4.84615 5.64541 4.65385 7.8593 4.5C9.90715 4.38462 11.955 4.26923 14.0028 4.15385C16.2167 4.03846 18.4306 3.88462 20.6998 3.76923C21.5854 3.73077 22.471 3.65385 23.4119 3.61538C26.8987 3.5 30.3303 3.34615 33.8171 3.23077C35.9757 3.15385 38.1342 3.07692 40.2927 3C41.1783 2.96154 42.0639 2.92308 42.9494 2.88462C46.3809 2.76923 49.8125 2.69231 53.244 2.57692C55.3472 2.53846 57.395 2.46154 59.4982 2.42308C60.2177 2.42308 60.8819 2.38462 61.6014 2.38462C65.3097 2.30769 69.0179 2.26923 72.7262 2.19231C74.774 2.15385 76.8772 2.11538 78.9251 2.07692C79.6446 2.07692 80.4195 2.03846 81.139 2.03846C84.9579 2 88.7769 2 92.6512 1.96154C95.0311 1.96154 97.411 1.92308 99.791 1.92308C103.831 1.92308 107.927 1.92308 111.967 1.96154C112.742 1.96154 113.572 2 114.347 2C117.177 2 120.007 2 122.852 2.11538C123.978 2.15385 125.138 2.23077 126.274 2.34615C130.088 2.61538 133.947 2.92308 137.81 3.23077C139.059 3.38462 140.307 3.61538 141.556 3.84615C144.953 4.38462 148.116 5 151.152 5" fill="#4F46E5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTABlock;
