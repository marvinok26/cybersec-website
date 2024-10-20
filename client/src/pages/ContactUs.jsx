import React from 'react';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from 'react-icons/fa';

import { SiMediamarkt, SiGooglemarketingplatform } from "react-icons/si";

import { Link } from 'react-router-dom';

const ContactUs = () => {
  const contactDetails = [
    {
      icon: <FaPhoneAlt className="text-2xl text-[#e3364d]" />,
      title: 'Phone',
      info: '+254 782 180 507',
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#e3364d]" />,
      title: 'Location',
      info: (
        <>
          4th Ngong Avenue Towers, <br />
          Nairobi, Kenya
        </>
      ),
    },
    {
      icon: <FaEnvelope className="text-2xl text-[#e3364d]" />,
      title: 'Email',
      info: 'info@alamatgroup.com',
    },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: '#' },
    { icon: <FaLinkedinIn />, url: '#' },
    { icon: <FaTwitter />, url: '#' },
    { icon: <FaInstagram />, url: '#' },
  ];

  return (
    <>
      {/* Map Section */}
      <section className="map-sec mt-5">
        <iframe
          className="w-full h-[200px] md:h-[400px]"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?q=4th%20Avenue%20Towers,%20along%20Ngong%20Avenue,%20Upper%20Hill,%20Nairobi&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Google Maps Location for Alamat Group Limited"
          loading="lazy"
        />
      </section>

      {/* Contact Details Section */}
      <div className="py-10">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="w-full max-w-[68rem] bg-[#2DB1A3] rounded-lg p-8 shadow-lg">
              <div className="flex justify-between flex-wrap">
                {contactDetails.map(({ icon, title, info }, index) => (
                  <div key={index} className="flex items-center mb-6 w-full sm:w-1/2 lg:w-1/3">
                    <div className="p-4 bg-gray-200 rounded-full">{icon}</div>
                    <div className="ml-4">
                      <h6 className="font-semibold text-lg text-white">{title}</h6>
                      <p className="text-sm text-white">{info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Icons and Contact Form Section */}
          <div className="space-bottom py-6 mt-12">
            <div className="container">
              <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:mx-12">

                {/* Social Icons Section */}
                <div className="lg:w-1/3">
                  <div className="title-area mb-6">
                    <span className="sub-title flex items-center text-[1rem] text-[#e3364d]">
                      <SiMediamarkt className="mr-2" />
                      Contact Us
                    </span>
                    <h2 className="sec-title style2 text-4xl my-3">Get In Touch</h2>
                    <p className="mb-8 text-gray-500">
                      We’re here to assist you with any inquiries you may have.
                    </p>

                    {/* Social Icons in a Row */}
                    <div className="flex space-x-4">
                      {socialLinks.map(({ icon, url }, index) => (
                        <Link
                          key={index}
                          to={url}
                          className="p-3 rounded-lg border border-solid border-slate-300 hover:bg-[#2DB1A3] text-[#e3364d] hover:text-[#ece7e7]"
                          aria-label={`Link to ${icon.type.name}`} // Improved SEO for social links
                        >
                          {icon}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact Form Section */}
                <div className="lg:w-2/3">
                  <div className="contact-form bg-white p-12 rounded-lg shadow-lg max-w-lg mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Your Name', 'Your Email', 'Phone Number'].map((placeholder, index) => (
                        <div key={index} className="form-group">
                          <input
                            type={placeholder === 'Your Email' ? 'email' : placeholder === 'Phone Number' ? 'tel' : 'text'}
                            placeholder={placeholder}
                            className="form-control border border-solid border-slate-400 rounded-md p-3 w-full"
                            required
                          />
                        </div>
                      ))}
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="form-control border border-solid border-slate-300 rounded-md p-3 w-full"
                          list="subject-options"
                          required
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
                          className="form-control border border-solid border-slate-400 rounded-md p-3 w-full h-32"
                          required
                        />
                      </div>
                      <div className="form-group col-span-2 mb-0">
                        <button className="global-btn w-full py-3 bg-[#2DB1A3] text-white rounded-lg hover:bg-[#3be7d6]">
                          Send Now
                          <SiGooglemarketingplatform
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
