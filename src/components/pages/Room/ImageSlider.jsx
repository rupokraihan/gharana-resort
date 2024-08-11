import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);

  const settings = {
    arrows: false, // Hide default arrows
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Adjust speed as needed
  };

  const customArrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 1,
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="relative">
      {/* Custom Previous Arrow */}
      <div
         className="prev-arrow bg-[#f6ba44] rounded-full p-2 cursor-pointer"
        style={{ ...customArrowStyle, left: '16px' }}
        onClick={goToPrev}
      >
       <FaArrowLeft className='text-black text-xl' />
      </div>

      {/* Custom Next Arrow */}
      <div
       className="next-arrow bg-[#f6ba44] rounded-full p-2 cursor-pointer"
        style={{ ...customArrowStyle, right: '16px' }}
        onClick={goToNext}
      >
        <FaArrowRight className='text-black text-xl' />
      </div>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Image ${index + 1}`}
              style={{ height: '480px', width: '100%', objectFit: 'cover' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

