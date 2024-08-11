/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/footerlogo.png';
import logo2 from './assets/Fliqa-India-Logo.png'

const Footer = () => {
    return (
        <div className="bg-gray-100 text-black">
            <footer className=" py-4 lg:py-6 px-8 lg:px-40 justify-between items-center">
                <div className="lg:grid grid-cols-4 justify-between gap-x-[6rem] lg:gap-x-[6rem] justify-items-center">
                    <div className="mt-2 ">
                        <img className="w-[100px] h-[100px] mx-auto" src={logo} alt="Footer Logo" />
                        <br />
                        <p className="text-lg font-medium text-center tracking-wide">
                            GHARANA RESORT, the latest addition to the accommodation map of Hooghly district, is lapped around by lush greenery but not far away from the heart of the City Of Joy .
                        </p>
                    </div>

                    <div className="mt-6">
                        <p className="font-bold font-serif tracking-wider mt-[24px] mb-[55px] text-lg">Contact info</p>
                        <p className="text-lg font-medium tracking-wide">Address - Molasmilla, Telipukur More, Ajab Nagar District - Singur, Hooghly, West Bengal. Pin- 712223</p> <br />
                        <a href="tel:+917439959439" className="link link-hover text-lg font-medium tracking-wide">
                            Phone no: +91 7439959439
                        </a>
                    </div>

                    <div className="mt-6 text-lg font-medium tracking-wide">
                        <p className="font-bold font-serif tracking-wider mt-[20px] mb-[15px]">Quick links</p>
                        <br />
                        <Link to="/" className="link link-hover">
                            Home
                        </Link>
                        <br />
                        <Link to="/contact" className="link link-hover">
                            About
                        </Link>
                        <br />
                        <Link to="/privacy-policy" className="link link-hover">
                            Privacy policy
                        </Link>
                        <br />
                        <Link to="/terms-and-condition" className="link link-hover">
                            Terms & condition
                        </Link>
                        <br />
                        <Link to="/contact" className="link link-hover">
                            Contact
                        </Link>
                        <br />
                        <Link to="/event" className="link link-hover">
                            Event
                        </Link>
                        <br />
                    </div>
                    <div className="mt-6">
                        <p className="font-bold font-serif tracking-wider mt-[20px]">Media Partner</p>
                        <br />
                        <Link to="https://www.fliqaindia.com/" target='_blank' className=" mt-4">
                            <img className="w-36 mt-[24px]" src={logo2} alt="logo" />
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
