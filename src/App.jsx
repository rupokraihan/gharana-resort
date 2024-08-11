/* eslint-disable jsx-quotes */
/* eslint-disable import/order */
/* eslint-disable react/jsx-tag-spacing */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import LoadingSpinner from './components/layouts/shared/LoadingSpinner';
import background from './components/pages/Room/assets/background.png';
import Navbar from './components/layouts/shared/Navbar';
import Footer from './components/layouts/shared/Footer';
import Aos from 'aos';
import GoogleAnalytics from './Context/GoogleAnalytics';

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration:1200,
      easing: 'ease-in-sine',
      delay: 400
    });
  }, []);
  const [isLoading, setIsLoading] = useState(document.readyState !== 'complete');

  useLayoutEffect(() => {
    const handlePageLoad = () => {
      setIsLoading(false);
      Aos.refresh();
    };

    if (!isLoading) {
      handlePageLoad();
    } else {
      window.addEventListener('load', handlePageLoad);
    }

    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, [isLoading]);
  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div>
      <GoogleAnalytics/>
      <Navbar />
      <div className='bg-cover bg-center' style={{ backgroundImage: `url(${background})` }}>
        <Outlet />
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
};

export default App;
