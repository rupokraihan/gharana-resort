/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import OurRooms from './OurRooms';
import OurResort from './OurResort';
import OurPackages from '../../layouts/shared/OurPackages';
import ContactBanner from '../../layouts/shared/ContactBanner';
import Testimonial from './Testimonial';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Gharana Resort</title>
        <meta
          name="keywords"
          content="Short Film, short film production, short film services, short film direction, short film cinematography, short film storytelling, short film editing, short film concept, short film creativity, professional short film production, short film rates, short film booking, short film clients, short film testimonials, short film examples, short film portfolio, short film gallery, short film expertise, short film discussions, short film forums, short film sharing, short film collaboration, short film community, short film networking, short film support, short film engagement, short film connections, short film bonding, short film well-being, short film celebration, short film achievements, short film progress, short film transformation, short film lifestyle, short film success stories, short film experts, short film leaders, short film influencers, short film testimonials."
        />
      </Helmet>
      <div data-aos="fade-zoom-in">
        <Header />
      </div>
      <AboutUs />
      <WhyChooseUs />
      <OurRooms />
      <OurResort />
      <OurPackages />
      <Testimonial />
      <ContactBanner />
    </div>
  );
};

export default Home;
