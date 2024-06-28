import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';
import '@/styles/variables.css'


const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;

const Span = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-26);
  text-align: center;
  margin-bottom: 50px;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const InputsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 90px;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.medium}) {
    row-gap: 30px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
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
    margin-top: 50px;
    margin-bottom: 20px;
    text-align: left;
  }
`;

export { ButtonDiv, H1, InputsDiv, Span, Wrapper };
