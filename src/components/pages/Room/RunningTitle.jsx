import React from 'react';
import FastMarquee from 'react-fast-marquee';

const RunningTitle = ({ title }) => {
  return (
    <div className='bg-[#f6ba44] h-[50px] flex justify-center items-center'>
    <FastMarquee>
      <h2 className='text-xl font-bold'>{title}</h2>
    </FastMarquee>
    </div>
  );
}

export default RunningTitle;
