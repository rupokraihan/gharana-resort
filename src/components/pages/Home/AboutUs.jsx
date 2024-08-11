/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-quotes */
/* eslint-disable max-len */
/* eslint-disable eol-last */
import React from 'react';
import aboutimg from './assets/aboutimg001.png';

const AboutUs = () => {
    return (
        <div data-aos="fade-up"
             className="my-container">
            <h1 className="font-bold tracking-[2px] text-2xl mb-8">ABOUT US</h1>
            <div className="lg:grid grid-cols-5 gap-20 justify-center items-center">
                <div className="col-span-3">
                    <p className="text-lg font-medium tracking-wider text-justify mb-10">
                        GHARANA RESORT, the latest addition in the accommodation map of Hooghly district, is lapped around by lush greenery but not far away from the heart of the City Of Joy. <br />
                        It’s located just beside Durgapur Expressway, at a 10 minutes drive-away from Dankuni toll plaza.Gharana Resort has well-equipped 40 rooms spread into six varied categories naming Cottage, Super Deluxe, Deluxe, Executive, and Family Room. <br />
                        The resort also has a well-maintained open swimming pool, games room with multiple options of indoor games activities ready to amaze bonafide guests. We also cater to the needs of day-out guests picnic requirements and any family gathering.
                    </p>
                </div>
                <div className="lg:col-span-2  text-xl lg:justify-center lg:items-center text-center font-bold tracking-[3px] text-[#764E00]">
                    <img className='w-full h-96' src={aboutimg} alt="about img" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;