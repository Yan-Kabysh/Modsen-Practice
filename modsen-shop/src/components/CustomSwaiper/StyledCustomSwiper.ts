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
  flex: ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} auto;
  width: ${({ theme }) => theme.full};
`;

const Pagination = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.s};
  left: ${({ theme }) => theme.zero};
  right: ${({ theme }) => theme.zero};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const PaginationDot = styled.span<PaginationDotProps>`
  width: ${({ active, theme }) => (active ? theme.s : '10px')};
  height: ${({ active, theme }) => (active ? theme.s : '10px')};
  margin: ${({ theme }) => theme.zero} 5px;
  border-radius: ${({ theme }) => theme.half};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.gray : theme.colors.lightGray};
  border: ${({ theme }) => theme.borderSmall} solid
    ${({ active, theme }) => (active ? theme.colors.white : 'transparent')};
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: ${({ active }) => (active ? '10px' : '5px')};
    height: ${({ active }) => (active ? '10px' : '5px')};
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
    left: ${({ theme }) => theme.zero};
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
