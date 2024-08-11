/* eslint-disable eol-last */
import React from 'react';
import HeaderTitle from '../../../layouts/shared/HeaderTitle';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageZoom from '../../../layouts/shared/ImageZoomHoverEffect';
import menuImg1 from './assets/menuImg01.png';
import menuImg2 from './assets/menuImg02.png';
import menuImg3 from './assets/menuImg03.png';
import menuImg4 from './assets/menuImg04.png';
import menuImg5 from './assets/menuImg05.png';
import menuImg6 from './assets/menuImg06.png';
import menuImg7 from './assets/menuImg07.png';
import menuImg8 from './assets/menuImg08.png';
import menuImg9 from './assets/menuImg09.png';
import menuImg10 from './assets/menuImg10.png';
import menuImg11 from './assets/menuImg11.png';
import menuImg12 from './assets/menuImg12.png';
import menuImg13 from './assets/menuImg13.png';
import menuImg14 from './assets/menuImg14.png';
import { Helmet } from 'react-helmet';

const Menu = () => {
  return (
    <div className="py-10" data-aos="fade-zoom-in" data-aos-duration="1200" data-aos-delay="400">
      <Helmet>
        <title>Gharana Resort | Menu </title>
        <meta
          name="keywords"
          content="Menu, lava resort west bengal, taki resort west bengal, amaya resort west bengal, sea resort west bengal, gharana resort"
        />
      </Helmet>
      <HeaderTitle title="MENU" />
      <section className='container px-5 mx-auto'>
        <div className='grid md:grid-cols-2 gap-8'>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg1}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg2}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg3}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg4}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg5}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg6}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg7}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg8}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg9}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg10}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg11}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg12}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg13}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
          <ImageZoom>
            <LazyLoadImage
              className="w-full h-full duration-500 transition-all ease-linear hover:scale-105 rounded-xl"
              src={menuImg14}
              alt="Menu Image"
              width="100%"
              height="100%"
            />
          </ImageZoom>
        </div>
      </section>
    </div>
  );
};

export default Menu;