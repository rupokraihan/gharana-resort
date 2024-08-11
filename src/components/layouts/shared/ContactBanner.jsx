/* eslint-disable eol-last */
import React from 'react';
import contactBanner from '../../../assets/banner-002.png';
import { FaPhoneVolume } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";

const ContactBanner = () => {
  return (
    <div
      className='bg-[#EFE1C6] grid md:grid-cols-5 gap-10 md:gap-32 justify-center items-center '>
      <div className='md:col-span-2'>
        <img className='w-full' src={contactBanner} alt="contactBanner" />
      </div>
      <div className='md:col-span-3 max-w-3xl px-4 pb-4 md:px-0 md:pb-0'>
        <h1 className='text-2xl md:text-4xl mb-4 text-center  font-bold tracking-widest'>Plan an Unforgettable Experience in Gharana Resort Today!</h1>
        <p className='text-lg md:text-2xl mb-4 text-center  font-semibold tracking-widest'>Gharana Resort, where you will love to visit again and again</p>
        <p className='text-xl md:text-2xl text-center font-bold tracking-widest'>BOOK YOUR STAY NOW</p>
        <div className='bg-[#1F1F1F] text-[#F6BA44] font-semibold lg:flex gap-10 w-full mt-10 max-w-lg mx-auto px-10 py-6 rounded-2xl text-center'>
          <div className='mb-4'>
            <span className=" text-[white] flex justify-center items-center mb-2"><FaPhoneVolume /></span>
            <a className='mb-1' href="tel:+917439959439">+91 7439959439</a> <br />
            <a href="tel:+91 8100286250">+91 8100286250</a> <br />
            <a href="tel:+91 7439944308">+91 7439944308</a>
          </div>
          <div>
            <span className="text-[white] flex justify-center items-center mb-2"><AiFillMail /></span>
            <a href="mailto:info@gharanaresort.com">Email - info@gharanaresort.com</a> <br />
            <a href="mailto:gm@gharanaresort.com">Email - gm@gharanaresort.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;