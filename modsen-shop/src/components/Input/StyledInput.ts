import '@/styles/variables.css';

import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const StyledInput = styled.input`
  width: ${({ width, theme }) => width || theme.full};
  height: ${({ theme }) => theme.m};
  background: transparent;
  border: none;
  border-bottom: ${({ theme }) => theme.borderSmall} solid ${({ theme }) => theme.colors.gray};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  color: ${({ theme }) => theme.colors.text};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} 1000px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} 1000px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    -webkit-box-shadow: ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} 1000px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} ${({ theme }) => theme.zero} 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: ${({ theme }) => theme.full};
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
  }
`;

export { StyledInput };
