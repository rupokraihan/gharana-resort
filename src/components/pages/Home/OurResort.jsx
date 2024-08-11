/* eslint-disable max-len */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
import React from 'react';
import ImageGallery from '../../layouts/shared/ImageGallery';
import resortImg1 from '../Gallery/assets/resortImg001.png';
import resortImg2 from '../Gallery/assets/resortImg002.png';
import resortImg3 from '../Gallery/assets/resortImg003.png';
import resortImg4 from '../Gallery/assets/resortImg004.png';
import resortImg5 from '../Gallery/assets/resortImg005.png';
import resortImg6 from '../Gallery/assets/resortImg006.png';
import resortImg7 from '../Gallery/assets/resortImg007.png';
import resortImg8 from '../Gallery/assets/resortImg008.png';
import resortImg9 from '../Gallery/assets/resortImg009.png';
import { Link } from 'react-router-dom';

const OurResort = () => {
  return (
      <div className="my-container mt-10">
          <h1 className="font-bold tracking-[2px] text-2xl text-center mb-10">OUR RESORT</h1>
          <div>
              <ImageGallery img1={resortImg1} img2={resortImg2} img3={resortImg3} img4={resortImg4} img5={resortImg5} img6={resortImg6} img7={resortImg7} img8={resortImg8} img9={resortImg9} />
              <Link to="/gallery" className="flex justify-center mt-10">
                  <button className='className=" mt-6 underline underline-offset-8 text-xl font-semibold tracking-widest"'> Explore More</button>
              </Link>
          </div>
      </div>
  );
};

export default OurResort;