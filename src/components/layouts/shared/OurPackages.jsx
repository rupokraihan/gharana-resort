/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
import React from 'react';
import { Link } from 'react-router-dom';
import picnic from '../../pages/Home/assets/picnic.png';
import outgoingImg from '../../pages/Home/assets/dayOutgoing.png';
import HeaderTitle from './HeaderTitle';

const OurPackages = () => {
    return (
        <div className=" pt-10">

            <HeaderTitle title="OUR PACKAGES"></HeaderTitle>
            <section className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16 container px-5 mx-auto">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" className="card w-full bg-[#EFE1C6] shadow-xl">
                    <figure>
                        <img src={picnic} alt="image1" className="w-full" />
                    </figure>
                    <div className="p-4">
                        <h1 className="uppercase text-2xl font-bold tracking-widest text-center text-black ">PICNIC</h1>
                        <ul className="list-disc text-xl font-semibold py-5 mx-auto w-full pl-10">
                            <li>Inclusions - Breakfast, Lunch & High Tea</li>
                            <li>Offerings - Games Room, High Speed Wi-Fi, Swimming Pool, Children Play Zone, Dedicated Venue.</li>
                            <li>Starting from – INR 1300+GST</li>
                            <li>Room options are also available at additional cost.</li>
                            <li>For rates and further query pls. contact above given number.</li>
                        </ul>
                    </div>
                    <Link to="/booking-form" className="flex justify-center items-center my-auto mb-4">
                        <button
                            type="button"
                            className="book-btn">
                            Book
                        </button>
                    </Link>
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" className="card w-full bg-[#EFE1C6] shadow-xl">
                    <figure>
                        <img src={outgoingImg} alt="image1" className="w-full" />
                    </figure>
                    <div className="p-4">
                        <h1 className="uppercase text-2xl font-bold tracking-widest text-center text-black ">DAY OUTING</h1>
                        <ul className="list-disc text-xl font-semibold py-5 mx-auto w-full pl-10">
                            <li>Includes - Drinks & Lunch</li>
                            <li>Offerings - Games Room, High Speed Wi-Fi, Swimming Pool, Children Play Zone, Dedicated Venue.</li>
                            <li>Starting from – INR 800+GST</li>
                            <li>Room options are also available at additional  cost.</li>
                            <li>For rates and further query pls. contact above given number.</li>
                        </ul>
                    </div>
                    <Link to="/booking-form" className="flex justify-center items-center my-auto mb-4">
                        <button
                            type="button"
                            className="book-btn">
                            Book
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default OurPackages;