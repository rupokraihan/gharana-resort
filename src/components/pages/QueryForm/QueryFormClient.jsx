/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable eol-last */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import QueryImg from '../../../assets/QueryImg.png';
import ContactBanner from '../../layouts/shared/ContactBanner';

const QueryFormClient = () => {
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
        <div data-aos="fade-zoom-in" data-aos-duration="800" data-aos-delay="400">
            <div className="container mx-auto px-5 flex justify-center">
                <div className="pt-10 max-w-7xl ">
                    <h1 className="font-bold tracking-[2px] text-3xl mb-8">Query Form</h1>
                    <form ref={form} onSubmit={sendEmail} className="grid lg:grid-cols-2 gap-20 justify-center items-center mb-12">
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic" className="col-span-1">
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
                                    className="w-full bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                                    placeholder="MESSAGE"
                                />
                            </div>
                            <button type="submit" value="Send" className="inline-flex items-center h-12 px-6 mb-3 font-bold text-black tracking-widest  transition duration-200 rounded shadow-md  md:mb-0 bg-amber-400 hover:bg-gray-300 mt-4">
                                SEND MESSAGE
                            </button>
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic" className="col-span-1">
                            <img className="w-full rounded-xl" src={QueryImg} alt="ContactImage" />
                        </div>
                    </form>
                </div>
            </div>
            <ContactBanner />
        </div>
    );
};

export default QueryFormClient;
