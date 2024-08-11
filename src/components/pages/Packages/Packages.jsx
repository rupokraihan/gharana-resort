import React from 'react';
import ContactBanner from '../../layouts/shared/ContactBanner';
import OurPackages from '../../layouts/shared/OurPackages.jsx';
import { Helmet } from 'react-helmet';

const Packages = () => {
  return (
    <div data-aos="fade-zoom-in" data-aos-duration="1200" data-aos-delay="400">
      <Helmet>
        <title>Gharana Resort | Packages </title>
        <meta
          name="keywords"
          content="resort west bengal, ajodhya hill resort west bengal tourism, lava resort west bengal, taki resort west bengal, amaya resort west bengal, sea resort west bengal, gharana resort"
        />
      </Helmet>
      <div>
        <OurPackages />
        <hr className='border border-gray-600 mb-16 lg:mx-28' />
      </div>
      <ContactBanner></ContactBanner>
    </div>
  );
}

export default Packages;