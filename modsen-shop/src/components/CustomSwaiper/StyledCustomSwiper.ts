import { styled } from 'styled-components';

import { PaginationDotProps, SlideContainerProps } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';
import '@/styles/variables.css'


const SliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
`;

const SlideContainer = styled.div<SlideContainerProps>`
  display: flex;
  transition: transform 0.5s ease;
  transform: ${({ activeIndex }) => `translateX(-${activeIndex * 100}%)`};
`;

const Slide = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 100%;
`;

const Pagination = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const PaginationDot = styled.span<PaginationDotProps>`
  width: ${({active}) => (active ? '20px' : '10px')};
  height: ${({active}) => (active ? '20px' : '10px')};
  margin: 0 5px;
  border-radius: 50%;
  background-color: ${({active, theme}) => (active ? 'transparent' : theme.colors.lightGray)};
  border: 1px solid ${({active, theme}) => (active ? theme.colors.white : 'transparent')};
  cursor: pointer;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: ${({active}) => (active ? '10px' : '5px')};
    height: ${({active}) => (active ? '10px' : '5px')};
  }
`;

const Img = styled.img`
  width: 100%;
  max-height: 646px;
  object-fit: cover;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  border-radius: 8px;
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 300px;
  }
`;

export { Img, Pagination, PaginationDot, Slide, SlideContainer, SliderWrapper };
