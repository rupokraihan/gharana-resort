/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable import/order */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
import React from 'react';
import roomImg01 from './assets/room01.png';
import roomImg02 from './assets/room02.png';
import roomImg03 from './assets/room03.png';
import roomImg04 from './assets/room04.png';
import roomImg05 from './assets/room05.png';
import roomImg06 from './assets/room06.png';
import { Link } from 'react-router-dom';
import ImageZoom from '../../layouts/shared/ImageZoomHoverEffect';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const OurRooms = () => {
  return (
      <div className="mt-6 md:mt-20 bg-[#F6BA44] py-6 md:py-12 md:px-28 px-16">
          <h1 className="font-bold tracking-[2px] text-2xl mb-8 text-center">OUR ROOMS</h1>
          <section className="grid gap-10 lg:gap-14 lg:grid-cols-3">
              <div>
                  <h2 className='text-xl font-bold text-center mb-4 tracking-[4px]'>COTTAGE</h2>
                  <ImageZoom>
                      <LazyLoadImage
                          data-aos="flip-left"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2000"
                          className="w-full md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                          src={roomImg01}
                          alt="Room Image"
                          width="100%"
                          height="100%"
                      />
                  </ImageZoom>
                  <Link to="/room" className='flex justify-center mt-6'>
                      <button className='check-btn'>CHECK DETAILS</button>
                  </Link>
              </div>
              <div>
                  <h2 className='text-xl font-bold text-center mb-4 tracking-[4px]'>SUPER DELUXE</h2>
                  <ImageZoom>
                      <LazyLoadImage
                          data-aos="flip-right"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2000"
                          className="w-full md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                          src={roomImg02}
                          alt="Room Image"
                          width="100%"
                          height="100%"
                      />
                  </ImageZoom>
                  <Link to="/room" className='flex justify-center mt-6'>
                      <button className='check-btn'>CHECK DETAILS</button>
                  </Link>
              </div>
              <div>
                  <h2 className='text-xl font-bold text-center mb-4 tracking-[4px]'>DELUXE</h2>
                  <ImageZoom>
                      <LazyLoadImage
                          data-aos="flip-left"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2000"
                          className="w-full md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                          src={roomImg03}
                          alt="Room Image"
                          width="100%"
                          height="100%"
                      />
                  </ImageZoom>
                  <Link to="/room" className='flex justify-center mt-6'>
                      <button className='check-btn'>CHECK DETAILS</button>
                  </Link>
              </div>
              <div>
                  <h2 className='text-xl font-bold text-center mb-4 tracking-[4px]'>EXECUTIVE</h2>
                  <ImageZoom>
                      <LazyLoadImage
                          data-aos="flip-right"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2000"
                          className="w-full md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                          src={roomImg04}
                          alt="Room Image"
                          width="100%"
                          height="100%"
                      />
                  </ImageZoom>
                  <Link to="/room" className='flex justify-center mt-6'>
                      <button className='check-btn'>CHECK DETAILS</button>
                  </Link>
              </div>
              <div>
                  <h2 className='text-xl font-bold text-center mb-4 tracking-[4px]'>FAMILY</h2>
                  <ImageZoom>
                      <LazyLoadImage
                          data-aos="flip-left"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2000"
                          className="w-full md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                          src={roomImg05}
                          alt="Room Image"
                          width="100%"
                          height="100%"
                      />
                  </ImageZoom>
                  <Link to="/room" className='flex justify-center mt-6'>
                      <button className='check-btn'>CHECK DETAILS</button>
                  </Link>
              </div>
              <div>
                  <h2 className='text-xl font-bold text-center mb-4 tracking-[4px]'>SUITE</h2>
                  <ImageZoom>
                      <LazyLoadImage
                          data-aos="flip-right"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2000"
                          className="w-full md:h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                          src={roomImg06}
                          alt="Room Image"
                          width="100%"
                          height="100%"
                      />
                  </ImageZoom>
                  <Link to="/room" className='flex justify-center mt-6'>
                      <button className='check-btn'>CHECK DETAILS</button>
                  </Link>
              </div>
              
              
          </section>
      </div>
  );
};

export default OurRooms;