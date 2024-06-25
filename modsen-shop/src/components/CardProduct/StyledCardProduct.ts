import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const StyledLink = styled(NavLink)`
  overflow: hidden;
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    height: 100%;
  }
`;

const Price = styled.span`
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: #a18a68;
  width: 15%;
  text-align: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    text-align: left;
  }
`;

const H2 = styled.h2`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 35px;
  text-align: center;
  max-width: 250px;
  width: 15%;
  @media screen and (max-width: ${breakpoints.medium}) {
    text-align: left;
    max-width: 100vh;
    width: 100%;
  }
`;

const PricesSpan = styled.span`
  display: none;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: block;
    font-family: 'DM Sans';
    font-size: 16px;
    font-weight: 400;
    line-height: 35px;
    color: #707070;
  }
`;

export { H2, Img, Price, PricesSpan, StyledLink, Wrapper };
