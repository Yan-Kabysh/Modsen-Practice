import '@/styles/variables.css';

import { styled } from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 80px;
  @media screen and (max-width: ${breakpoints.medium}) {
    row-gap: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export { Container, Wrapper };
