import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

// Import images
import natureImage from '@/images/nature-3239504_1920.jpg';
import tuscanyImage from '@/images/tuscany-3364921_1920.jpg';
import blackAndWhiteImage from '@/images/black-and-white-photography-3243741_1920.jpg';

// Import styled Img component
import { Img } from './StyledSwiper';

// Create styled-component for CustomPagination
import styled from 'styled-components';

const CustomPagination = styled.div`
  .swiper-pagination {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .swiper-pagination-bullet {
    width: 9px;
    height: 9px;
    background-color: white;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 16px;
    height: 16px;
    background-color: transparent;
    border: 2px solid white;
    border-radius: 50%;
  }
`;

const CustomSwiper = () => {
  const images = [
    { src: natureImage, alt: 'Nature' },
    { src: tuscanyImage, alt: 'Tuscany' },
    { src: blackAndWhiteImage, alt: 'Black and White Photography' },
  ];

  return (
    <CustomPagination>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Img src={image.src} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CustomPagination>
  );
};

export { CustomSwiper };
