import '@/styles/variables.css';

import { styled } from 'styled-components';

import { PaginationDotProps, SlideContainerProps } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';

const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: ${({ theme }) => theme.full};
  border-radius: ${({ theme }) => theme.xs};
`;

const SlideContainer = styled.div<SlideContainerProps>`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`;

const Slide = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: ${({ theme }) => theme.full};
`;

const Pagination = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.s};
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const PaginationDot = styled.span<PaginationDotProps>`
  width: ${({ active, theme }) => (active ? theme.s : theme.bigDots)};
  height: ${({ active, theme }) => (active ? theme.s : theme.bigDots)};
  margin: 0 ${({ theme }) =>  theme.smallDots};
  border-radius: ${({ theme }) => theme.half};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.gray : theme.colors.lightGray};
  border: ${({ theme }) => theme.borderSmall} solid
    ${({ active, theme }) => (active ? theme.colors.white : 'transparent')};
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: ${({ active, theme }) => (active ? theme.bigDots : theme.smallDots)};
    height: ${({ active, theme }) => (active ? theme.bigDots : theme.smallDots)};
  }
`;

const Img = styled.img`
  width: ${({ theme }) => theme.full};
  height: auto;
  max-height: 646px;
  object-fit: contain;
  border-radius: ${({ theme }) => theme.xs};

  @media screen and (max-width: ${breakpoints.medium}) {
    height: 300px;
  }
`;

const SlideWrapper = styled.div`
  position: relative;
`;

const SlideBtnDiv = styled.div`
  position: absolute;
  z-index: 10;
  bottom: ${({ theme }) => theme.m}; 
  left: 5%;
  width: 10%;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 25%;
    left: 0;
  }
`;

export {
  Img,
  Pagination,
  PaginationDot,
  Slide,
  SlideBtnDiv,
  SlideContainer,
  SliderWrapper,
  SlideWrapper,
};
