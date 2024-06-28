import { styled } from 'styled-components';
import '@/styles/variables.css'


const Input = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  outline: none;
  background: transparent;
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px
      ${({theme}) => theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${({theme}) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({theme}) => theme.colors.text};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px
      ${({theme}) => theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${({theme}) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({theme}) => theme.colors.text};
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px
      ${({theme}) => theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${({theme}) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({theme}) => theme.colors.text};
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
