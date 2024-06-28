import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';
import '@/styles/variables.css'


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-top: 250px;
`;

const H1 = styled.h1`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-33);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-43);
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-20);
    line-height: var(--line-height-26);
  }
`;

const Span = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-26);
  color: ${({theme}) => theme.colors.darkGray};
  text-align: center;
  margin-bottom: 40px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
  }
`;

export { H1, Span, Wrapper };
