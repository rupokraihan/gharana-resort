/* eslint-disable jsx-quotes */
/* eslint-disable max-len */
/* eslint-disable eol-last */
import React from 'react';
import img1 from './assets/Whychooseimage01.png';
import img2 from './assets/Whychooseimage02.png';
import img3 from './assets/Whychooseimage03.png';
import img4 from './assets/Whychooseimage04.png';
import img5 from './assets/Whychooseimage05.png';

const WhyChooseUs = () => {
  return (
      <div data-aos="fade-down" className="my-container">
          <h1 className="font-bold tracking-[2px] text-2xl mb-8">WHY CHOOSE US</h1>
          <p className="text-lg font-medium tracking-wider text-justify">
              Step into our resort, where we don't merely provide you with rooms; we offer an immersive environment designed to elevate your holiday experience. As you cross our threshold, you'll embark on a journey of rejuvenation and discovery like no other .
          </p>
          <section className="grid grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 mt-12 justify-center items-center">
              <div>
                  <img className="mx-auto mb-4 w-16 h-16" src={img1} alt="why choose img" />
                  <p className="text-center text-xl font-semibold tracking-wider">Multicuisine <br /> Restaurant</p>
              </div>
              <div>
                  <img className="mx-auto mb-4 w-16 h-16" src={img2} alt="why choose img" />
                  <p className="text-center text-xl font-semibold tracking-wider">Free <br />  Parking</p>
              </div>
              <div>
                  <img className="mx-auto mb-4 w-16 h-16" src={img3} alt="why choose img" />
                  <p className="text-center text-xl font-semibold tracking-wider">Swimming <br /> Pool</p>
              </div>
              <div>
                  <img className="mx-auto mb-4 w-16 h-16" src={img4} alt="why choose img" />
                  <p className="text-center text-xl font-semibold tracking-wider">Home like <br /> experience</p>
              </div>
              <div>
                  <img className="mx-auto mb-4 w-16 h-16" src={img5} alt="why choose img" />
                  <p className="text-center text-xl font-semibold tracking-wider">Banquet  <br /> Hall</p>
              </div>
          </section>
      </div>
  );
};

export default WhyChooseUs;