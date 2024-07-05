import '@/styles/variables.css';

import React from 'react';
import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

type ButtonProps = {
  maxWidth?: string;
  width?: string;
  height?: string;
} & React.ComponentProps<'button'>;

const StyledButton = styled.button<ButtonProps>`
  max-width: ${({ maxWidth, theme }) => maxWidth || theme.btnMaxWidth};
  width: ${({ width, theme }) => width || theme.full};
  height: ${({ height, theme }) => height || theme.btnHeight};
  border: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.buttonText};
  border-radius: ${({ theme }) => theme.xxs};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-16);
  color: ${({ theme }) => theme.colors.buttonText};
  background: ${({ theme }) => theme.colors.buttonBackground};
  transition:
    background ${({ theme }) => theme.time},
    color ${({ theme }) => theme.time};

  &:hover {
    color: ${({ theme }) => theme.colors.buttonBackground};
    background: ${({ theme }) => theme.colors.buttonText};
    border: ${({ theme }) => theme.borderSmall} solid
      ${({ theme }) => theme.colors.buttonText};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: ${({ theme }) => theme.btnMaxWidthMedia};
    width: ${({ theme }) => theme.full};
    height: ${({ theme }) => theme.btnHeightMedia};
  }
`;

export { StyledButton };
