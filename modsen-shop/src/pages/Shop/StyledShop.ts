import { breakpoints } from '@/constants/Breakpoints';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  width: 100%;
`;

const FiltersDiv = styled.div`
  display: none;
  gap: 20px;
  margin-bottom: 40px;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: flex;
    align-items: center;
  }
`;

const FiltersTitle = styled.span`
font-family: 'DM Sans';
font-size: 12px;
font-weight: 400;
line-height: 20px;
color: #A18A68;
`;

const H1 = styled.h1`
  font-family: 'DM Sans';
  font-size: 33px;
  font-weight: 500;
  line-height: 43px;
  margin-top: 100px;
  margin-bottom: 40px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 20px;
    line-height: 26px;
    margin-top: 40px;
  }
`;

export { Container, H1, Wrapper, FiltersDiv, FiltersTitle };
