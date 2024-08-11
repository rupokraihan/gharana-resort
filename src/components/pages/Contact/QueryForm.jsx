/* eslint-disable react/button-has-type */
/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable eol-last */
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const QueryForm = () => {
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
      <div className='pt-16'>
          <h1 className="font-bold tracking-[2px] text-3xl mb-8 text-[#221a09]">QUERY FORM</h1>
          <form ref={form} onSubmit={sendEmail}>
              <div>
                  <input
                      type="text"
                      name="user_name"
                      className="w-full lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="NAME "
                  />
              </div>
              <div>
                  <input
                      type="email"
                      name="user_email"
                      className="w-full lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="EMAIL"
                  />
              </div>
              <div>
                  <input
                      type="number"
                      name='user_phone'
                      className="w-full lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="MOBILE"
                  />
              </div>
              <div>
                  <input
                      type="text"
                      className="w-full lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="SUBJECT"
                  />
              </div>
              <div>
                  <textarea
                      name="message"
                      className="w-full h-32 lg:w-96 bg-white  px-6 py-3 font-bold font-mono text-xl rounded-md border border-gray-400 focus:outline-none focus:ring-gray-900 focus:border-gray-900 placeholder-gray-700 mb-4"
                      placeholder="MESSAGE"
                  />
              </div>
              <button type="submit" value="Send" className="inline-flex items-center py-4 px-6 font-bold text-black tracking-widest  transition duration-200 rounded shadow-md  md:mb-0 bg-amber-400 hover:bg-gray-300 mt-4 ">
                  SEND MESSAGE
              </button>
          </form>
      </div>
  );
};

export default QueryForm;