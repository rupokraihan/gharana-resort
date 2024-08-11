/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable spaced-comment */
/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useLayoutEffect, useState } from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaFacebookF, FaLocationDot, FaPhoneVolume, FaYoutube } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/GHARANA LOGO.png';

const Navbar = () => {
    useLayoutEffect(() => {
        let theEnd = 0;
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', function () {
            const scrollTop = window.pageXOffset || this.document.documentElement.scrollTop;
            if (scrollTop > theEnd) {
                navbar.style.top = '-100px';
            } else {
                navbar.style.top = '0px';
            }
            theEnd = scrollTop;
        });
    }, []);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav>
            <div className="bg-[#805500] py-2 px-2 md:px-40 text-white flex justify-between">
                <div className="md:flex md:gap-16">
                    <p className="flex md:justify-between items-center gap-2 mb-2">
                        <span className="border p-1 rounded-full bg-white text-[#805500]">
                            <a href="tel:+917439959439">
                                <FaPhoneVolume />
                            </a>
                        </span>
                        <a href="tel:+917439959439">+91 7439959439</a>
                    </p>
                    <p className="flex justify-between items-center gap-2">
                        <span className="border p-1 rounded-full bg-white text-[#805500]">
                            <a href="mailto:gm@gharanaresort.com">
                                <AiFillMail />
                            </a>
                        </span>
                        <a href="mailto:gm@gharanaresort.com">Email - gm@gharanaresort.com</a>
                    </p>
                </div>
                <div className="flex justify-between items-center gap-3">
                    <a href="https://www.facebook.com/gharanaresort/" target="_blank" className="border p-1 rounded-full bg-white text-[#805500]" rel="noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.youtube.com/@gharanaresortsingur" target="_blank" className="border p-1 rounded-full bg-white text-[#805500]" rel="noreferrer">
                        <FaYoutube />
                    </a>
                    <a href="https://maps.app.goo.gl/b68DZU5UwQSfDqjr7" target="_blank" className="border p-1 rounded-full bg-white text-[#805500]" rel="noreferrer">
                        <FaLocationDot />
                    </a>
                </div>
            </div>

            <div className="text-lg bg-[#FFE5B4] pt-2 pb-3  mx-auto  w-full shadow-2xl fixed z-10" id="navbar">
                <div className="relative  flex items-center justify-between px-4 lg:px-24 mx-auto">
                    <div className="flex items-center gap-4 ">
                        {/*Website logo */}
                        <Link to="/">
                            <img className="h-[60px] w-[80px]" src={logo} alt="fliqaIndiaLogo" />
                        </Link>
                    </div>

                    <ul className="items-center text-black text-ellipsis hidden space-x-8 lg:flex">
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/room" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Room
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/packages" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Packages
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/restaurant" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Restaurant
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/event" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Event
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'default')}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="flex justify-center items-center">
                        <div>
                            <Link
                                to="/query-form"
                                className="sign-up bg-[#f0ae2a] font-bold text-black rounded-full px-6 py-3 mx-6 sm:inline-block hidden text-base tracking-wider hover:bg-[#e9bc64] hover:border-0 transition duration-500 ease-in-out transform">
                                Ask
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Navbar Section */}
                    <div className="lg:hidden">
                        {/* Dropdown Open Button */}
                        <button aria-label="Open Menu" title="Open Menu" className="text-black focus:outline-none" onClick={() => setIsMenuOpen(true)}>
                            <FaBars className="w-8" />
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-10">
                                <div className=" bg-[#ffffff] border rounded shadow-sm pb-8">
                                    {/* Logo & Button section */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex gap-2">
                                            <Link to="/" className="inline-flex items-center">
                                                <img className="h-[60px] w-[80px]" src={logo} alt="fliqaIndiaLogo" />
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button type="button" className="text-black  focus:outline-none" onClick={() => setIsMenuOpen(false)}>
                                                <FaTimes className="w-8 h-8 mt-4 mr-3" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className="space-y-2">
                                            <li>
                                                <Link
                                                    to="/"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/room"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Room
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/gallery"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Gallery
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/packages"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Packages
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/restaurant"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Restaurant
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/event"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Event
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/contact"
                                                    className="block
                             px-4 font-semibold  text-black hover:text-[#1c3b47]">
                                                    Contact
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
