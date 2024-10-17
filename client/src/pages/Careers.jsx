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
    <div className="p-8 mt-16">
      <div className='border-2 border-solid border-gray-300 p-3'>
        {/* "We're Hiring" Button */}
        <button className="border-2 border-solid border-black bg-[#2DB1A3] text-white px-4 py-2 rounded-full mb-6">
          We're Hiring
        </button>

        {/* Heading and Subtitle */}
        <h1 className="text-4xl font-bold mb-4">
          Be part of our <span className="text-[#e3364d]">Mission</span>
        </h1>
        <p className="text-lg mb-8 max-w-2xl">
          We are looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, full ownership, and responsibility.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`border-2 border-solid border-black text-white px-3 py-2 rounded-full transition ${
                selectedCategory === category ? 'bg-[#62d3c7]' : 'bg-[#2DB1A3] hover:bg-[#62d3c7]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div className="flex flex-wrap gap-4">
        {jobsToShow.length === 0 ? (
          <p className="text-xl font-semibold">No jobs available in this category.</p>
        ) : (
          jobsToShow.map(({ id, title, description, location, type }) => (
            <div
              key={id}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33%-1rem)] border border-gray-300 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow mb-4 flex flex-col justify-between"
            >
              {/* Job Title */}
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-sm mb-4">{description}</p>

              {/* Job Details and Apply Button */}
              <div className="mt-auto flex justify-between items-center">
                <div className="flex gap-4">
                  <span className="border-2 border-solid border-black text-white bg-[#e3364d] hover:bg-[#e76e7f] px-3 py-1 rounded-full text-sm">
                    {location}
                  </span>
                  <span className="border-2 border-solid border-black text-white bg-[#e3364d] hover:bg-[#e76e7f] px-3 py-1 rounded-full text-sm">
                    {type}
                  </span>
                </div>

                {/* Apply Button with Icon - Positioned at the bottom right */}
                <button className="flex items-center text-[#2DB1A3] hover:text-[#62d3c7] font-semibold">
                  Apply
                  <RxArrowTopRight className="ml-2" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Careers;
