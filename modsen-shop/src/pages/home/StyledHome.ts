import { styled } from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';
const Wrapper = styled.div`
  margin-top: 50px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-bottom: 30px;
  }
`;

const Ref = styled.a`
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: #a18a68;
  text-decoration: none;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    line-height: 22px;
  }
`;

const H1 = styled.h1`
  font-family: 'DM Sans';
  font-size: 33px;
  font-weight: 500;
  line-height: 43px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;
    line-height: 27px;
  }
`;

export { H1, Ref, Title, Wrapper };
