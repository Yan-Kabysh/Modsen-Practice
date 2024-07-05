import '@/styles/variables.css';

import { styled } from 'styled-components';

const Input = styled.input`
  height: ${({ theme }) => theme.m};
  width: ${({ theme }) => theme.full};
  border: none;
  border-bottom: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.gray};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  outline: none;
  background: transparent;
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
`;

const IconWrapper = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.bigDots};
  right: 0;
`;

const Wrapper = styled.div`
  position: relative;
`;

export { IconWrapper, Input, Wrapper };
