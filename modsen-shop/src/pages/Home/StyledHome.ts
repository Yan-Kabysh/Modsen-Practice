import '@/styles/variables.css';

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
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-26);
  color: ${({ theme }) => theme.colors.accent};
  text-decoration: none;
  transition: color 0.3s ease;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-14);
    line-height: var(--line-height-22);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const H1 = styled.h1`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-33);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-43);
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-16);
    line-height: var(--line-height-27);
  }
`;

export { H1, Ref, Title, Wrapper };
