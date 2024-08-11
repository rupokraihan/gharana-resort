/* eslint-disable import/order */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-quotes */
/* eslint-disable eol-last */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import eventImg1 from './assets/eventImg01.png';
import eventImg2 from './assets/eventImg02.png';
import eventImg3 from './assets/eventImg03.png';
import eventImg4 from './assets/eventImg04.png';
import eventImg5 from './assets/eventImg05.png';
import eventImg6 from './assets/eventImg06.png';
import eventImg7 from './assets/eventImg07.png';
import eventImg8 from './assets/eventImg08.png';
import eventImg9 from './assets/eventImg09.png';
import eventImg10 from './assets/eventImg10.png';
import eventImg11 from './assets/eventImg11.png';
import eventImg12 from './assets/eventImg12.png';
import eventImg13 from './assets/eventImg13.png';
import eventImg14 from './assets/eventImg14.png';
import eventImg15 from './assets/eventImg15.png';
import eventImg16 from './assets/eventImg16.png';
import eventImg17 from './assets/eventImg17.png';
import eventImg18 from './assets/eventImg18.png';
import eventImg19 from './assets/eventImg19.png';
import BookingForm from '../BookingForm/BookingForm';
import { Helmet } from 'react-helmet';
import HeaderTitle from '../../layouts/shared/HeaderTitle';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageZoom from '../../layouts/shared/ImageZoomHoverEffect';

const Event = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_931fd2m', 'template_d6fx18j', form.current, 'dLC1eTIYTPEBb_00z')
            .then((result) => {
                console.log(result.text);
                // Show success sweet alert
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully!',
                    text: 'We will get back to you soon.',
                });
            })
            .catch((error) => {
                console.error(error.text);
                // Show error sweet alert
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong! Please try again later.',
                });
            });
    };
    return (
        <div className="pt-10" data-aos="fade-zoom-in">
                <Helmet>
                    <title>Gharana Resort | Event </title>
                    <meta
                        name="keywords"
                        content="resort west bengal, ajodhya hill resort west bengal tourism, lava resort west bengal, taki resort west bengal, amaya resort west bengal, sea resort west bengal, gharana resort"
                    />
                </Helmet>
                <section className='container px-5 mx-auto'>
                    <div>
                        <HeaderTitle title="Events at Gharana" />
                    <section className="grid md:grid-cols-5 gap-12">
                        <div className='md:col-span-3 grid md:grid-cols-2 gap-8'>
                            <ImageZoom>
                                <LazyLoadImage
                                    className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                    src={eventImg1}
                                    alt="Event Image"
                                    width="100%"
                                    height="100%"
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                />
                            </ImageZoom>
                            <ImageZoom>
                                <LazyLoadImage
                                    className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                    src={eventImg2}
                                    alt="Event Image"
                                    width="100%"
                                    height="100%"
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                />
                            </ImageZoom>
                            <ImageZoom>
                                <LazyLoadImage
                                    className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                    src={eventImg4}
                                    alt="Event Image"
                                    width="100%"
                                    height="100%"
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                />
                            </ImageZoom>
                            <ImageZoom>
                                <LazyLoadImage
                                    className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                    src={eventImg3}
                                    alt="Event Image"
                                    width="100%"
                                    height="100%"
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                />
                            </ImageZoom>
                            </div>
                        <form ref={form} onSubmit={sendEmail} data-aos="flip-left"
                            data-aos-easing="ease-out-cubic" className="md:col-span-2">
                                <div>
                                    <input
                                    type="text"
                                    name="user_name"
                                        className="w-full bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                                        placeholder="NAME"
                                    />
                                </div>
                                <div>
                                    <input
                                    type="email"
                                    name="user_email"
                                        className="w-full bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                                        placeholder="EMAIL"
                                    />
                                </div>
                                <div>
                                    <input
                                    type="number"
                                    name='user_phone'
                                        className="w-full bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                                        placeholder="MOBILE"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        className="w-full bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                                        placeholder="SUBJECT"
                                    />
                                </div>
                                <div>
                                    <textarea
                                    name="message"
                                        className="w-full h-40 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                                    placeholder="MESSAGE"
                                    />
                                </div>
                            <button type="submit" value="Send" className="inline-flex items-center h-12 px-6 mb-3 font-bold text-black tracking-widest  transition duration-200 rounded shadow-md  md:mb-0 bg-amber-400 hover:bg-gray-300 mt-4">
                                    SEND MESSAGE
                                </button>
                            </form>
                        </section>
                    </div>

                    <div className="pt-12 pb-10 mx-auto flex flex-wrap">
                        <div>
                            <div className="grid md:grid-cols-7 gap-6 mb-5">
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="md:col-span-2">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg5}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="md:col-span-2">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg6}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="md:col-span-3">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg7}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            </div>
                            <div  className="grid md:grid-cols-3 gap-6 mb-5">
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg8}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg9}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg10}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-7 gap-6 mb-5">
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="md:col-span-3">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg11}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="md:col-span-2">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg12}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="md:col-span-2">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg13}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-3 gap-6 mb-5">
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg14}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg15}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="col-span-1">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg16}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-7 gap-6">
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="md:col-span-2">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg17}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="md:col-span-2">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg18}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            <div data-aos="flip-left"
                                data-aos-easing="ease-out-cubic" className="md:col-span-3">
                                <ImageZoom>
                                    <LazyLoadImage
                                        className="w-full h-96 duration-500 transition-all ease-linear hover:scale-110 rounded-xl"
                                        src={eventImg19}
                                        alt="Event Image"
                                        width="100%"
                                        height="100%"
                                    />
                                </ImageZoom>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
};

export default Event;
