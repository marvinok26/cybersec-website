import React, { useState, useEffect } from 'react';
import headerImage1 from '../images/img10.jpeg';
import headerImage2 from '../images/img9.jpeg';
import headerImage3 from '../images/img3.jpg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [headerImage1, headerImage2, headerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container1">
      <div className="home-contents">
        
        {/* Sliding text */}
        <div className="sliding-text">
          <h1>POWERFUL SECURITY SYSTEMS TO PROTECT YOUR BUSINESS.</h1>
          <p>Cyber security is the practice of defending computers, servers, mobile devices electronic systems, networks, and data from malicious attacks, its also known as information technology security or electronic information security.</p>
          <button className="btn-show__more">Show More</button>
        </div>

        {/* Image Slider */}
        <div className="header-image">
          <img src={images[currentImage]} alt={`Header Image ${currentImage + 1}`} />
        </div>
      </div>

      <div className="home container2">
        <h1>TRUSTED BY MILLIONS OF CUSTOMERS</h1>
      </div>
    </div>
  );
}

export default Home;
