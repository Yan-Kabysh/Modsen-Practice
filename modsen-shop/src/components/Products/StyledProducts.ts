import '@/styles/variables.css';

import { styled } from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: ${({ theme }) => theme.xl};
  @media screen and (max-width: ${breakpoints.medium}) {
    row-gap: ${({ theme }) => theme.m};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.m};
`;

export { Container, Wrapper };
