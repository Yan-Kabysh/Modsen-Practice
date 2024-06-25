import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const StyledInput = styled.input`
  width: ${(props) => props.width || '45%'};
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: ${(props) => props.theme.colors.text};
  outline: none;

  &::placeholder {
    color: #707070;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px
      ${(props) => props.theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.background} inset;
    -webkit-text-fill-color: ${(props) => props.theme.colors.text};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px
      ${(props) => props.theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.background} inset;
    -webkit-text-fill-color: ${(props) => props.theme.colors.text};
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px
      ${(props) => props.theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.background} inset;
    -webkit-text-fill-color: ${(props) => props.theme.colors.text};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    font-size: 12px;
    line-height: 20px;
  }
`;

export { StyledInput };
