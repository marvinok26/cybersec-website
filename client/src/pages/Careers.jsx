import React, { useState, useEffect } from 'react';
import jobsData from '../data/jobsdata';
import { RxArrowTopRight } from 'react-icons/rx'; // Import the icon

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState('View All');
  const [jobsToShow, setJobsToShow] = useState([]);

  // Combine all jobs from all categories when 'View All' is selected
  useEffect(() => {
    if (selectedCategory === 'View All') {
      const allJobs = Object.values(jobsData).flat(); // Combine all job arrays into one
      setJobsToShow(allJobs);
    } else {
      setJobsToShow(jobsData[selectedCategory] || []); // Set jobs from the selected category
    }
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set category and update jobs list
  };

  const categories = ['View All', 'Cybersecurity', 'Cloud Infrastructure', 'Data Encryption Engineer'];

  return (
    <div className="p-8 mt-[4rem]">
      <div className='border-2 border-solid border-gray-300 p-3'>
        {/* "We're Hiring" Button */}
        <button className="border-2 border-solid border-black bg-[#2DB1A3] text-white px-2 py-1 rounded-full mb-6">
          We're hiring
        </button>

        {/* Heading and Subtitle */}
        <h1 className="text-4xl font-bold mb-4">
          Be part of our <span className='text-[#e3364d]'>Mission</span>
        </h1>
        <p className="text-lg mb-8 w-[700px]">
          We are looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, full ownership, and responsibility.
        </p>

        {/* Category buttons */}
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

      {/* Job listings */}
      <div className="flex flex-wrap gap-2 mb-6">
        {jobsToShow.map(({ id, title, description, location, type }) => (
          <div key={id} className="w-full border border-gray-300 p-4 rounded-lg mb-4 shadow-lg relative flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="mb-6">{description}</p>

            {/* Job Location and Job Type */}
            <div className="flex gap-4 mb-4">
              <span className="border-2 border-solid border-black text-white bg-[#e3364d] hover:bg-[#e76e7f] px-2 py-1 rounded-full">
                {location}
              </span>
              <span className="border-2 border-solid border-black text-white bg-[#e3364d] hover:bg-[#e76e7f] px-2 py-1 rounded-full">
                {type}
              </span>
            </div>

            {/* Apply Button with Icon - Positioned at the bottom right */}
            <div className="flex justify-end">
              <button className="text-lg flex items-center text-[#2DB1A3] font-bold hover:text-[#62d3c7]">
                Apply
                <RxArrowTopRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
