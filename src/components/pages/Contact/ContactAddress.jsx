/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
/* eslint-disable eol-last */
import React from 'react';

const ContactAddress = () => {
    return (
        <div>
            <h1 className="font-bold tracking-[2px] text-3xl mb-5 text-[#221a09]">Get in Touch </h1>
            <p className="text-xl font-bold tracking-wider max-w-xl mb-3">Mollasmilla, Telipukur More, Ajab Nagar-Singur, Hooghly, West Bengal. Pin- 712223  </p>
            <p className="text-xl font-medium tracking-wider max-w-xl md:flex gap-2">Contact Number -
                <span className='font-bold tracking-widest'>
                    <a href="tel:+91-7439959439">+91-7439959439</a><br />
                    <a href="tel:+91-7439944308">+91-7439944308</a>
                </span>
            </p>
            <p className="text-xl font-medium tracking-wider max-w-xl md:flex gap-2">Email -
                <span className='font-bold tracking-widest'>
                    <a href="mailto:gm@gharanaresort.com">gm@gharanaresort.com</a><br />
                    <a href="mailto:info@gharanaresort.com">  info@gharanaresort.com</a>
                </span>
            </p>
        </div>
    );
};

export default ContactAddress;
