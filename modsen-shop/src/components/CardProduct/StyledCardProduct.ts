import '@/styles/variables.css';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const Img = styled.img`
  max-width: ${({ theme }) => theme.full};
  max-height: ${({ theme }) => theme.full};
  object-fit: contain;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.s};
  }
`;

const StyledLink = styled(NavLink)`
  overflow: hidden;
  width: ${({ theme }) => theme.cartItemSize};
  height: ${({ theme }) => theme.cartItemSize};
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: ${({ theme }) => theme.full};
    height: ${({ theme }) => theme.full};
  }
`;

const Price = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-26);
  color: ${({ theme }) => theme.colors.accent};
  width: ${({ theme }) => theme.cartColumnSize};
  text-align: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: ${({ theme }) => theme.full};
    text-align: left;
  }
`;

const H2 = styled.h2`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-35);
  text-align: center;
  max-width: ${({ theme }) => theme.desktopContentMarginBottom};
  width: ${({ theme }) => theme.cartColumnSize};
  @media screen and (max-width: ${breakpoints.medium}) {
    text-align: left;
    max-width: 100vh;
    width: ${({ theme }) => theme.full};
  }
`;

const PricesSpan = styled.span`
  display: none;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: block;
    font-family: var(--font-family-dm-sans);
    font-size: var(--font-size-16);
    font-weight: var(--font-weight-400);
    line-height: var(--line-height-35);
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export { H2, Img, Price, PricesSpan, StyledLink, Wrapper };
