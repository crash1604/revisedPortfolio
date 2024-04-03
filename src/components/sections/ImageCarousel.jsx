// ImageCarousel.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`project ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

const CustomPrevArrow = (props) => (
  <div {...props}>
    <span className="material-icons" style={{ fontSize: 24, color: '#888' }}></span>
  </div>
);

const CustomNextArrow = (props) => (
  <div {...props}>
    <span className="material-icons" style={{ fontSize: 24, color: '#888' }}></span>
  </div>
);


export default ImageCarousel;
