import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CustomSwiperProps } from '@/../types/types';
import { Button } from '@/components/Button/Button';
import { ROUTES } from '@/constants/Path';
import { useAppSelector } from '@/hooks/redux';

import {
  Img,
  Pagination,
  PaginationDot,
  Slide,
  SlideBtnDiv,
  SlideContainer,
  SliderWrapper,
  SlideWrapper,
} from './StyledCustomSwiper';

const CustomSwiper: React.FC<CustomSwiperProps> = ({
  autoScrollInterval = 5000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const products = useAppSelector(
    (state) => state.productReducer.products
  ).slice(0, 4);
  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  }, [products.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, autoScrollInterval);
    return () => clearInterval(interval);
  }, [autoScrollInterval, nextSlide]);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const viewClickHandler = () => {
    navigate(ROUTES.SHOP + '/' + (activeIndex + 1));
  };

  const slides = useMemo(() => {
    return products.map((product, index) => (
      <Slide key={index}>
        <SlideWrapper key={'slide' + (index + 1)}>
          <Img src={product.image} alt={product.title} />
          <SlideBtnDiv>
            <Button onClick={viewClickHandler}>View Product</Button>
          </SlideBtnDiv>
        </SlideWrapper>
      </Slide>
    ));
  }, [products]);

  const dots = useMemo(() => {
    return products.map((_, index) => (
      <PaginationDot
        key={index}
        active={index === activeIndex}
        onClick={() => goToSlide(index)}
      />
    ));
  }, [activeIndex, goToSlide, products]);

  return (
    <SliderWrapper>
      <SlideContainer activeIndex={activeIndex}>{slides}</SlideContainer>
      <Pagination>{dots}</Pagination>
    </SliderWrapper>
  );
};

export default CustomSwiper;
