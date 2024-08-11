/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import banner1 from './assets/banner/banner001.png';
import banner3 from './assets/banner/banner003.png';
import banner4 from './assets/banner/banner004.png';
import banner5 from './assets/banner/banner005.png';
import './banner.css';

const Header = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');

    const handleCheckInDateChange = (e) => {
        setCheckInDate(e.target.value);
    };

    const handleCheckOutDateChange = (e) => {
        setCheckOutDate(e.target.value);
    };

    return (
        <div>
            <Carousel className="slide text-center" autoPlay={true} showThumbs={false} interval={2000} infiniteLoop={true}>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
                <div>
                    <img src={banner4} />
                </div>
                <div>
                    <img src={banner5} />
                </div>
            </Carousel>
            <div className="flex justify-center">
                <div className="bg-[rgba(26, 28, 33, 0.40)] lg:backdrop-blur-md px-12 md:px-20 py-2 md:py-4 rounded shadow-xl w-full lg:max-w-2xl lg:flex justify-center items-center gap-10 lg:absolute bottom-20 mt-10 lg:mt-0">
                    <div className="mb-4">
                        <label htmlFor="checkInDate" className="block lg:text-gray-100 font-semibold mb-2 tracking-wider text-lg">
                            Check in
                        </label>
                        <input
                            type="date"
                            id="checkInDate"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring font-semibold bg-[#CAD3EA] text-lg focus:border-blue-300"
                            value={checkInDate}
                            onChange={handleCheckInDateChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="checkOutDate" className="block lg:text-gray-100 font-semibold mb-2 tracking-wider text-lg">
                            Check out
                        </label>
                        <input
                            type="date"
                            id="checkOutDate"
                            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring font-semibold bg-[#CAD3EA] text-lg focus:border-blue-300"
                            value={checkOutDate}
                            onChange={handleCheckOutDateChange}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                        <Link to="/query-form" className="bg-[#CAD3EA] hover:bg-[#CAD3EA] text-black font-semibold py-2 text-lg px-4 ml-2 rounded mt-5 ">
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
