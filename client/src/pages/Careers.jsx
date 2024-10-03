import React, { useState, useEffect } from 'react';
import jobsData from '../data/jobsdata';
import { RxArrowTopRight } from 'react-icons/rx'; // Import the icon

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('View All');
  const [jobsToShow, setJobsToShow] = useState([]);

  // Update jobs to display based on selected category
  useEffect(() => {
    setJobsToShow(jobsData[selectedCategory] || []); // Ensure there's a fallback to avoid undefined
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set category and update jobs list
  };

  const categories = ['View All', 'Cybersecurity', 'Cloud Infrastructure', 'Data Encryption Engineer'];

  return (
    <div className="p-8">
      {/* "We're Hiring" Button */}
      <button className="border-2 border-solid border-black text-black px-2 py-1 rounded-full mb-6">
        We're hiring
      </button>

      {/* Heading and Subtitle */}
      <h1 className="text-4xl font-bold mb-4">Be part of our mission</h1>
      <p className="text-lg mb-8 w-[700px]">
        We are looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, full ownership, and responsibility.
      </p>

      {/* Category buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="border-2 border-solid border-black text-black px-3 py-1 rounded-full hover:bg-gray-100 transition"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job listings */}
      <div className="flex flex-wrap gap-2 mb-6">
        {jobsToShow.map(({ id, title, description, location, type }) => (
          <div key={id} className="w-full border border-gray-300 p-4 rounded-lg mb-4 shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="mb-6">{description}</p>

            {/* Job Location and Job Type */}
            <div className="flex gap-4 mb-4">
              <span className="border-2 border-solid border-black text-black px-2 py-1 rounded-full">
                {location}
              </span>
              <span className="border-2 border-solid border-black text-black px-2 py-1 rounded-full">
                {type}
              </span>
            </div>

            {/* Apply Button with Icon - positioned to the right */}
            <button className="absolute top-4 right-4 text-lg flex items-center text-black-500 font-bold hover:text-black-200 hover:font-normal">
              Apply
              <RxArrowTopRight className="ml-2" /> {/* Icon next to Apply */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
