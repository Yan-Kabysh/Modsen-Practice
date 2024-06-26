import { breakpoints } from '@/constants/Breakpoints';
import { styled } from 'styled-components';

const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  outline: none;
  background: transparent;
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
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;

const Wrapper = styled.div`
  position: relative;
  
`;

export { IconWrapper, Input, Wrapper };
