/* eslint-disable jsx-quotes */
/* eslint-disable import/order */
import React from 'react';
import ImageZoom from '../../layouts/shared/ImageZoomHoverEffect';
import HeaderTitle from '../../layouts/shared/HeaderTitle';
import restaurant01 from './assets/restaurant01.png';
import restaurant02 from './assets/restaurant02.png';
import restaurant03 from './assets/restaurant03.png';
import restaurant04 from './assets/restaurant04.png';
import restaurant05 from './assets/restaurant05.png';
import restaurant06 from './assets/restaurant06.png';
import restaurant07 from './assets/restaurant07.png';
import restaurant08 from './assets/restaurant08.png';
import restaurant09 from './assets/restaurant09.png';
import restaurant10 from './assets/restaurant10.png';
import restaurant11 from './assets/restaurant11.png';
import restaurant12 from './assets/restaurant12.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';

function ImageGrid() {
  return (
    <div>
      <HeaderTitle title="Restaurant"></HeaderTitle>

      <section className='container px-10 md:px-5 mx-auto'>
        <div className="grid md:grid-cols-3 gap-6 mb-4">
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="col-span-1 relative bg-[#F6BA44] pb-6 mb-6 rounded-xl h-96">
            <Link to="/menu">
              <ImageZoom>
                <LazyLoadImage
                  className="w-full h-[325px] duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                  src={restaurant01}
                  alt="Restaurant Image"
                  width="100%"
                  height="100%"
                />
              </ImageZoom>
              <h1 className="relative text-center text-black font-bold tracking-widest text-2xl my-auto mt-2">MENU</h1>
            </Link>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="col-span-1">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant02}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="col-span-1">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant03}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
        </div>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic" className="grid md:grid-cols-7 gap-6 mb-4">
          <div className="md:col-span-2">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant05}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="md:col-span-3">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant04}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="md:col-span-2">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant06}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
        </div>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic" className="grid md:grid-cols-3 gap-6 mb-4">
          <div className="col-span-1">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant09}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="col-span-1">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant07}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="col-span-1">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant08}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
        </div>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic" className="grid md:grid-cols-7 gap-6 mb-4">
          <div className='md:col-span-2'>
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant10}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="md:col-span-3">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant12}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            className="md:col-span-2">
            <ImageZoom>
              <LazyLoadImage
                className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                src={restaurant11}
                alt="Restaurant Image"
                width="100%"
                height="100%"
              />
            </ImageZoom>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ImageGrid;
