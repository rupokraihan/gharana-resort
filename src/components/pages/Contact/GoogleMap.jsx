/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
import React from 'react';

const GoogleMap = () => {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.3777883321895!2d88.24878077597435!3d22.78846122502295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8851f7e070439%3A0x7eefd1a8dc600192!2sGharana%20Resort%2C%20Singur!5e0!3m2!1sen!2sbd!4v1695901114725!5m2!1sen!2sbd"
            width="100%"
            height="700"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    );
};

export default GoogleMap;
