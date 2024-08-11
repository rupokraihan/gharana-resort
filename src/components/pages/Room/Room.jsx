import React from 'react';
import ContactBanner from '../../layouts/shared/ContactBanner';
import Category from './Category/Category';
import { Helmet } from 'react-helmet';
import HeaderTitle from '../../layouts/shared/HeaderTitle';
import RunningTitle from './RunningTitle';
import AmenitiesSection from './AmenitiesSection';


const Room = () => {
  return (
    <div data-aos="fade-zoom-in" data-aos-duration="1200" data-aos-delay="400">
      <Helmet>
        <title>Gharana Resort | Room </title>
        <meta
          name="keywords"
          content="resort west bengal, ajodhya hill resort west bengal tourism, lava resort west bengal, taki resort west bengal, amaya resort west bengal, sea resort west bengal, gharana resort"
        />
      </Helmet>

      <div className='pt-10'>
      <HeaderTitle title="ROOM CATEGORY" />
      </div>
      <RunningTitle title="Check in – 12noon, Check out - 11:00 am	swimming pool, Game zone (Table tennis, Chess, Carrom), Children play area, Inhouse restaurant and room service facility., Banquet, Lush green lawn, WI-fi, Intercom, Doctor on call, Free parking, 24 hrs power backup, In room tea coffee maker" />
      <div data-aos="fade-up" className='container px-5 mx-auto py-16'>
        <Category></Category>
      </div>
      <div className='container px-5 mx-auto pb-16'>
        <AmenitiesSection></AmenitiesSection>
      </div>
      <ContactBanner></ContactBanner>
    </div>
  );
}

export default Room;
