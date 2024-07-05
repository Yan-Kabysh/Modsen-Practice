import React, { useEffect, useState } from 'react';

import { CustomSwiperProps } from '@/../types/types';

import {
  Pagination,
  PaginationDot,
  Slide,
  SlideContainer,
  SliderWrapper,
} from './StyledCustomSwiper';

import { Button } from '@/components/Button/Button';
import { ROUTES } from '@/constants/Path';
import { useAppSelector } from '@/hooks/redux';
import { Img } from '@/components/CustomSwaiper/StyledCustomSwiper';
import blackAndWhiteImage from '@/images/black-white.jpg';
import natureImage from '@/images/nature.jpg';
import tuscanyImage from '@/images/tuscany.jpg';
const slides = [
  <div key="slide1">
    <Img src={blackAndWhiteImage} alt="" />
  </div>,
  <div key="slide2">
    <Img src={natureImage} alt="" />
  </div>,
  <div key="slide3">
    <Img src={tuscanyImage} alt="" />
  </div>,
];

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  autoScrollInterval = 3000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(nextSlide, autoScrollInterval);
    return () => clearInterval(interval);
  }, [autoScrollInterval]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <SliderWrapper>
      <SlideContainer activeIndex={activeIndex}>
        {slides.map((slide, index) => (
          <Slide key={index}>{slide}</Slide>
        ))}
      </SlideContainer>
      <Pagination>
        {slides.map((_, index) => (
          <PaginationDot
            key={index}
            active={index === activeIndex}
            onClick={() => goToSlide(index)}
          />
        ))}
      </Pagination>
    </SliderWrapper>
  );
};

export default CustomSwiper;
