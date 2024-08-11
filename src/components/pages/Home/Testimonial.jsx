/* eslint-disable jsx-quotes */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Pagination,Navigation } from 'swiper/modules';
import './styles.css';
import rightArrow from './assets/ArrowRight.png';
import leftArrow from './assets/ArrowLeft.png';
import review1 from './assets/review1.png';
import review2 from './assets/review2.png';
import review3 from './assets/review3.png';

const Testimonial = () => {
    return (
        <div data-aos="fade-up"
            data-aos-easing="linear"
            className="bg-[#CFD3E8]">
            <h1 className="font-bold tracking-[4px] text-4xl pt-12 pb-12 text-center">TESTIMONIAL</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }}
                pagination={false}
                modules={[Navigation, Pagination]}
                className="mySwiper"
                initialSlide={1}
                speed={2000}
                zoom={true}
                navigation={{ // Configure navigation
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    hideOnClick: true, // Hide arrows at the first and last slide
                }}
            >
                <SwiperSlide className="mt-24 mb-4">
                    <div className="card w-72 h-96 bg-[#352A43] shadow-xl text-white relative">
                        <div className="flex flex-col items-center justify-center h-full">
                            <img className="w-20 h-20 absolute -top-10" src={review2} alt="" />
                            <div className="card-body items-center text-center">
                                <h2 className="card-title mt-8">Himadri Banik</h2>
                                <p className="text-justify">
                                    Rooms are clean. Environment is really good. Service is really good. They have complementary breakfast. Food quality is average and a little costly. Pool and the
                                    facilities are well maintained. Overall good location for a short stay.
                                </p>
                                <p className='text-gray-400 font-thin'>26/07/2023</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mx-60 mt-24 mb-4">
                    <div className="card w-72 h-96 bg-[#352A43] shadow-2xl text-white relative">
                        <div className="flex flex-col items-center justify-center h-full">
                            <img className="w-20 h-20 absolute -top-10" src={review3} alt="" />
                            <div className="card-body items-center text-center">
                                <h2 className="card-title mt-8">Sumit Paul</h2>
                                <p className="text-justify">
                                    We had an amazing time at the resort with our family. The food was delicious, the service was top-notch and the ground was beautiful. We would definitely recommend
                                    it to anyone looking for a great place to stay.
                                </p>
                                <p className='text-gray-400 font-thin'>30/08/2023</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="mt-24 mb-4">
                    <div className="card w-72 h-96 bg-[#352A43] shadow-xl text-white relative">
                        <div className="flex flex-col items-center justify-center h-full">
                            <img className="w-20 h-20 absolute -top-10" src={review1} alt="" />
                            <div className="card-body items-center text-center">
                                <h2 className="card-title mt-8">Aninda Baneree</h2>
                                <p className="text-justify">
                                    Incredible stay for weekend trips. Extremely cooperative staff members and the food is to die for. A nice ambiance coupled with lush green fields all around gives
                                    you the perfect escape from the metropolitan chaos. Highly recommended.
                                </p>
                                <p className='text-gray-400 font-thin'>26/05/2023</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="flex gap-28 justify-center items-center mt-20 pb-10">
                    <img
                        className="w-36 h-7 swiper-button-prev cursor-pointer btn bg-transparent border-0 hover:bg-transparent"
                        src={leftArrow}
                        alt="leftArrow"
                    />
                    <img
                        className="w-36 h-7 swiper-button-next clear-left cursor-pointer btn bg-transparent border-0 hover:bg-transparent"
                        src={rightArrow}
                        alt="rightArrow"
                    />
                </div>
            </Swiper>
        </div>
    );
};

export default Testimonial;
