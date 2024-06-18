import styled from 'styled-components';
import React from 'react';

type ButtonProps = {
  maxWidth?: string;
  width?: string;
  height?: string;
} & React.ComponentProps<'button'>;

const StyledButton = styled.button<ButtonProps>`
  max-width: ${(props) => props.maxWidth || '288px'};
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '32px'};
  border: 1px solid ${(props) => props.theme.colors.buttonText};
  border-radius: 4px;
  font-family: 'DM Sans';
  font-size: 12px;
  font-weight: 500;
  line-height: 15.62px;
  color: ${(props) => props.theme.colors.buttonText};
  background: ${(props) => props.theme.colors.buttonBackground};
  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    color: ${(props) => props.theme.colors.buttonBackground};
    background: ${(props) => props.theme.colors.buttonText};
    border: 1px solid ${(props) => props.theme.colors.buttonText};
  }
`;

export { StyledButton };
