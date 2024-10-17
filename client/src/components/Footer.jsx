import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import logo1 from '../images/logo1.jpeg';

const Footer = () => {        
    return (
        <footer className="py-6 bg-gray-50 sm:py-12 lg:py-16">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-10 gap-x-8">
                    {/* Logo and Description */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                        <img className="w-auto h-11 lazyload" src={logo1} alt="Alamat Group Limited Logo, your trusted technology partner" loading="lazy" />

                        <p className="mt-5 text-base leading-relaxed text-gray-600">
                            At Alamat Group Limited, we provides innovative IT solutions, specializing in cloud services, cybersecurity, and business automation. Dedicated to enhancing business performance.
                        </p>

                        {/* Social Links */}
                        <ul className="flex items-center space-x-3 mt-6">
                            <li>
                                <a href="https://twitter.com" title="Follow Alamat Group Limited on Twitter" className="flex items-center justify-center text-white transition-all duration-200 bg-[#2DB1A3] rounded-full w-7 h-7 hover:bg-[#e3364d] focus:bg-[#e3364d]" aria-label="Twitter">
                                    <FaTwitter className="w-4 h-4" />
                                </a>
                            </li>
                            <li>
                                <a href="https://facebook.com" title="Follow Alamat Group Limited on Facebook" className="flex items-center justify-center text-white transition-all duration-200 bg-[#2DB1A3] rounded-full w-7 h-7 hover:bg-[#e3364d] focus:bg-[#e3364d]" aria-label="Facebook">
                                    <FaFacebookF className="w-4 h-4" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" title="Follow Alamat Group Limited on Instagram" className="flex items-center justify-center text-white transition-all duration-200 bg-[#2DB1A3] rounded-full w-7 h-7 hover:bg-[#e3364d] focus:bg-[#e3364d]" aria-label="Instagram">
                                    <FaInstagram className="w-4 h-4" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com" title="Follow Alamat Group Limited on Github" className="flex items-center justify-center text-white transition-all duration-200 bg-[#2DB1A3] rounded-full w-7 h-7 hover:bg-[#e3364d] focus:bg-[#e3364d]" aria-label="Github">
                                    <FaGithub className="w-4 h-4" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Company</h2>
                        <ul className="mt-4 space-y-3">
                            <li><a href="/about" title="Learn more about Alamat Group Limited" className="text-base text-black transition-all duration-200 hover:text-[#e3364d] focus:text-[#e3364d]">About Us</a></li>
                            <li><a href="/services" title="View Alamat Group's IT services" className="text-base text-black transition-all duration-200 hover:text-[#e3364d] focus:text-[#e3364d]">Services</a></li>
                            <li><a href="/careers" title="Explore careers at Alamat Group" className="text-base text-black transition-all duration-200 hover:text-[#e3364d] focus:text-[#e3364d]">Careers</a></li>
                            <li><a href="/" title="Return to Alamat Group homepage" className="text-base text-black transition-all duration-200 hover:text-[#e3364d] focus:text-[#e3364d]">Home</a></li>
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div>
                        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Help</h2>
                        <ul className="mt-4 space-y-3">
                            <li><a href="/contact" title="Get support from Alamat Group" className="text-base text-black transition-all duration-200 hover:text-[#e3364d] focus:text-[#e3364d]">Customer Support</a></li>
                            <li><a href="/downloads" title="Download resources from Alamat Group" className="text-base text-black transition-all duration-200 hover:text-[#e3364d] focus:text-[#e3364d]">Downloads</a></li>
                            <li><a href="/terms" title="View Alamat Group's terms and conditions" className="text-base text-black transition-all duration-200 hover:text-[#e3364d] focus:text-[#e3364d]">Terms & Conditions</a></li>
                            <li><a href="/privacy" title="View Alamat Group's privacy policy" className="text-base text-black transition-all duration-200 hover:text-[#e3364d] focus:text-[#e3364d]">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                        <h2 className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Subscribe to our Newsletter</h2>
                        <form action="#" method="POST" className="mt-4">
                            <div className="flex flex-col">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="email" name="email" id="email" placeholder="Enter your email address" className="w-full p-3 text-black placeholder-gray-500 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-[#e3364d] caret-[#e3364d]" aria-label="Email for Alamat Group newsletter subscription" />
                            </div>
                            <button type="submit" className="px-4 py-2 mt-3 font-semibold text-white bg-[#2DB1A3] rounded-md hover:bg-[#2fccbd] focus:bg-[#fb8090] transition-all duration-200">Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <hr className="mt-12 mb-6 border-gray-200" />
                <p className="text-[10px] text-center text-gray-600">© Copyright {new Date().getFullYear()}, All Rights Reserved by Alamat Group Limited</p>
            </div>
        </footer>
    );
}

export default Footer;
