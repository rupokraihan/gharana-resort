/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable eol-last */
import React from 'react';
import ContactAddress from './ContactAddress';
import QueryForm from './QueryForm';
import GoogleMap from './GoogleMap';
import ContactBanner from '../../layouts/shared/ContactBanner';
import { Helmet } from 'react-helmet';

const Contact = () => {
    return (
        <section data-aos="fade-zoom-in">
            <Helmet>
                <title>Gharana Resort | Contact </title>
                <meta
                    name="keywords"
                    content="resort west bengal, ajodhya hill resort west bengal tourism, lava resort west bengal, taki resort west bengal, amaya resort west bengal, sea resort west bengal, gharana resort"
                />
            </Helmet>
            <div className="mb-16 container px-5 mx-auto pt-10 lg:grid grid-cols-2 justify-center items-center pt-24">
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" className="col-span-1">
                    <ContactAddress />
                    <QueryForm />
                </div>
                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic" className="col-span-1">
                    <GoogleMap />
                </div>
            </div>
            <ContactBanner />
        </section>
    );
};

export default Contact;
