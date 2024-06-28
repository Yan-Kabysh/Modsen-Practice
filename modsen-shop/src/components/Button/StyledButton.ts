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
  max-width: ${({ maxWidth }) => maxWidth || '288px'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '32px'};
  border: 1px solid ${({ theme }) => theme.colors.buttonText};
  border-radius: 4px;
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-16);
  color: ${({ theme }) => theme.colors.buttonText};
  background: ${({ theme }) => theme.colors.buttonBackground};
  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.buttonBackground};
    background: ${({ theme }) => theme.colors.buttonText};
    border: 1px solid ${({ theme }) => theme.colors.buttonText};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: 520px;
    width: 100%;
    height: 26px;
  }
`;

export { StyledButton };
