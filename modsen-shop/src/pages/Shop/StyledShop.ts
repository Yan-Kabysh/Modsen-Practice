import { styled } from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';
import '@/styles/variables.css'


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
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-20);
  color: ${({theme}) => theme.colors.accent};
`;

const H1 = styled.h1`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-33);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-43);
  margin-top: 100px;
  margin-bottom: 40px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-20);
    line-height: var(--line-height-26);
    margin-top: 40px;
  }
`;

export { Container, FiltersDiv, FiltersTitle, H1, Wrapper };
