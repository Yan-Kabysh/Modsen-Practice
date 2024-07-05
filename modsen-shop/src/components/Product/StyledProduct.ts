import '@/styles/variables.css';

import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { ImageWrapperProps, WrapperProps } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div<WrapperProps>`
  width: ${({ width, theme }) => width || theme.full};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.s};
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
  max-width: 30%;
  width: 100%;
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 40%;
    width: 100%;
  }
`;

const Button = styled.button`
  width: ${({ theme }) => theme.full};
  height: ${({ theme }) => theme.cartColumnSize};
  text-align: center;
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-22);
  background: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  position: absolute;
  z-index: 1;
  bottom: 0;
  border: none;
  border-radius: 0 0 6px 6px;
  transform: translateY(100%);
  opacity: 0;
  transition:
    transform ${({ theme }) => theme.time} ease-in-out,
    opacity ${({ theme }) => theme.time} ease-in-out,
    background ${({ theme }) => theme.time} ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.gray};
  }
`;

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: ${({ theme }) => theme.full};
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
  max-width: ${({ theme }) => theme.full};
  max-height: ${({ theme }) => theme.full};
  object-fit: contain;
`;

export { Button, ImageWrapper, Img, Price, StyledNavLink, Title, Wrapper };
