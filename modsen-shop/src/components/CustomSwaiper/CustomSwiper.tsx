import React, { useEffect, useState } from 'react';

import { CustomSwiperProps } from '@/../types/types';
import { slides } from '@/constants/Slides';

import {
  Pagination,
  PaginationDot,
  Slide,
  SlideContainer,
  SliderWrapper,
} from './StyledCustomSwiper';

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
