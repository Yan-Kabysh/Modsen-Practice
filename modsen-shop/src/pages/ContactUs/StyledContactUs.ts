import '@/styles/variables.css';

import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div`
  max-width: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.mediumPadding};
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: ${({ theme }) => theme.full};

    width: ${({ theme }) => theme.full};
  }
`;

const Span = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-26);
  text-align: center;
  margin-bottom: ${({ theme }) => theme.bigPadding};
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
    row-gap: ${({ theme }) => theme.mediumPadding};
    flex-direction: column;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.m};
`;

const H1 = styled.h1`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-33);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-43);
  margin-top: ${({ theme }) => theme.xxl};
  margin-bottom: ${({ theme }) => theme.m};
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-20);
    line-height: var(--line-height-26);
    margin-top: ${({ theme }) => theme.bigPadding};
    margin-bottom: ${({ theme }) => theme.s};
    text-align: left;
  }
`;

const ErrorWrapper = styled.div`
display flex;
flex-direction: column;
max-width: 45%;
width: ${({ theme }) => theme.full};
text-align: left;
@media screen and (max-width: ${breakpoints.medium}) {
  max-width: 100%;

  }
`;

const ErrorWrapperArea = styled.div`
display flex;
flex-direction: column;
width: ${({ theme }) => theme.full};
text-align: left;
`;

export {
  ButtonDiv,
  ErrorWrapper,
  ErrorWrapperArea,
  H1,
  InputsDiv,
  Span,
  Wrapper,
};
