import '@/styles/variables.css';

import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';
import { WrapperProps, ImageWrapperProps } from '@/../types/types';

const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-26);
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-14);
    line-height: var(--line-height-22);
    -webkit-line-clamp: 2;
  }
`;

const Price = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-26);
  color: ${({ theme }) => theme.colors.accent};
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 30%;
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 40%;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 15%;
  text-align: center;
  font-family: var(--font-family-dm-sans);
font-size: var(--font-size-14);
font-weight: var(--font-weight-500);
line-height: var(--line-height-22);
background: ${({ theme }) => theme.colors.lightGray};
cursor: pointer;
position: absolute;
z-index: 1;
/* display: none; */
bottom: 0;
border: none;
border-radius: 0 0 6px 6px; 
transform: translateY(100%);
opacity: 0;
transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, background 0.3s ease-in-out;
  &:hover {
   background: ${({ theme }) => theme.colors.gray};
      }
`;

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: ${({ height }) => height || '380px'};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 180px;
  }
  &:hover ${Button} {
    transform: translateY(0);
    opacity: 1;
      }
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export { ImageWrapper, Img, Price, StyledNavLink, Title, Wrapper, Button };
