import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <>
      {/* Map Section */}
      <div className="map-sec">
        <iframe
          className="w-full md:h-[400px] h-[200px]"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=4th%20Avenue%20Towers,%20along%20Ngong%20Avenue,%20Upper%20Hill,%20Nairobi&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Google Maps Location for Real Plan Consultants"
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Details Section */}
      <div className=" py-10">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-[68rem] bg-blue-500 rounded-lg p-8 shadow-lg">
              <div className="flex justify-between flex-wrap">

                {/* Phone Info */}
                <div className="flex items-center mb-6 w-full md:w-1/3">
                  <div className="p-4 bg-gray-200 rounded-full">
                    <FaPhoneAlt className="text-2xl text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h6 className="font-semibold text-lg text-white">Phone</h6>
                    <p className="text-sm text-white">
                      <span>(629) 555-0129</span> <br />
                      <span>01254693326</span>
                    </p>
                  </div>
                </div>

                {/* Location Info */}
                <div className="flex items-center mb-6 w-full md:w-1/3">
                  <div className="p-4 bg-gray-200 rounded-full">
                    <FaMapMarkerAlt className="text-2xl text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h6 className="font-semibold text-lg text-white">Location</h6>
                    <p className="text-sm text-white">
                      4517 Washington Av, Kentucky <br /> 39495
                    </p>
                  </div>
                </div>

                {/* Email Info */}
                <div className="flex items-center mb-6 w-full md:w-1/3">
                  <div className="p-4 bg-gray-200 rounded-full">
                    <FaEnvelope className="text-2xl text-blue-500" />
                  </div>
                  <div className="ml-4">
                    <h6 className="font-semibold text-lg text-white">Email</h6>
                    <p className="text-sm text-white">
                      <span>demo@gmail.com</span> <br />
                      <span>admin@yahoo.com</span>
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="space-bottom py-6 mt-12">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:mx-12">

                {/* Social Icons and Info on the Left */}
                <div className="lg:w-1/3 ml-[4rem] mr-[18rem]">
                  <div className="title-area mb-6">
                    <span className="sub-title flex items-center text-[1rem] text-green-800">
                      <img src="assets/img/icon/title_left.svg" alt="shape" className='mr-2'/>
                      Contact Us
                    </span>
                    <h2 className="sec-title style2 text-4xl my-3">Get In Touch</h2>
                    <p className="mb-8 text-gray-500">
                      Design is a broad category that encompasses various technological solutions.
                    </p>

                    {/* Social Icons in a Row */}
                    <div className="flex space-x-4">
                      <Link to="#" className="p-3 rounded-lg border border-solid border-slate-300">
                        <FaFacebookF className="text-gray-800 text-xl" />
                      </Link>
                      <Link to="#" className="p-3 rounded-lg border border-solid border-slate-300">
                        <FaLinkedinIn className="text-gray-800 text-xl" />
                      </Link>
                      <Link to="#" className="p-3 rounded-lg border border-solid border-slate-300">
                        <FaTwitter className="text-gray-800 text-xl" />
                      </Link>
                      <Link to="#" className="p-3 rounded-lg border border-solid border-slate-300">
                        <FaInstagram className="text-gray-800 text-xl" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Contact Form on the Right */}
                <div className="lg:w-2/3 mr-[4rem]">
                  <div className="contact-form bg-white p-12 rounded-lg shadow-lg max-w-lg mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="form-control style-border w-full"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Your Email"
                          className="form-control style-border w-full"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="form-control style-border w-full"
                        />
                      </div>

                      {/* Subject as Input Box */}
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="form-control style-border w-full"
                          list="subject-options"
                        />
                        <datalist id="subject-options">
                          <option value="Subject 01" />
                          <option value="Subject 02" />
                          <option value="Subject 03" />
                        </datalist>
                      </div>

                      <div className="form-group col-span-2">
                        <textarea
                          placeholder="Message here.."
                          className="form-control style-border w-full h-32"
                        />
                      </div>

                      {/* Send Now Button */}
                      <div className="form-group col-span-2 mb-0">
                        <button className="global-btn w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                          Send Now
                          <img
                            src="assets/img/icon/right-icon.svg"
                            alt="Send"
                            className="inline ml-2"
                          />
                        </button>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
