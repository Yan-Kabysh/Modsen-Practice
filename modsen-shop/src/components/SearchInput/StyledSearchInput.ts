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
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;

const Wrapper = styled.div`
  position: relative;
`;

export { Input, IconWrapper, Wrapper };
