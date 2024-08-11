import React from 'react';
import { Header } from '../../layouts/shared/Header';
import OurPackages from '../../layouts/shared/OurPackages.jsx';
import ContactBanner from '../../layouts/shared/ContactBanner';
import ImageGrid from './ImageGrid.JSX';
import { Helmet } from 'react-helmet';

const Restaurant = () => {
  return (
    <div data-aos="fade-zoom-in" data-aos-duration="1200" data-aos-delay="400">
      <Helmet>
        <title>Gharana Resort | Restaurant </title>
        <meta
          name="keywords"
          content="resort west bengal, ajodhya hill resort west bengal tourism, lava resort west bengal, taki resort west bengal, amaya resort west bengal, sea resort west bengal, gharana resort"
        />
      </Helmet>
      <div className='pt-10 pb-16'>
        <ImageGrid></ImageGrid>
      </div>
      <ContactBanner></ContactBanner>
    </div>
  );
}

export default Restaurant;