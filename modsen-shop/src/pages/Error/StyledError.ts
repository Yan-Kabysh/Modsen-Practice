import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;

const H1 = styled.h1`
  font-family: 'DM Sans';
  font-size: 33px;
  font-weight: 500;
  line-height: 43px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const Span = styled.span`
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: #707070;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    line-height: 20px;
  }
`;

export { H1, Span, Wrapper };
