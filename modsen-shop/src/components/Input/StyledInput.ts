import '@/styles/variables.css';

import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const StyledInput = styled.input`
  width: ${({ width }) => width || '45%'};
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
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
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
  }
`;

export { StyledInput };
