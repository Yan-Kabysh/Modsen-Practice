import styled from 'styled-components';

const StyledInput = styled.input`
  width: 45%;
  height: 40px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: #000000;
  outline: none;

  &::placeholder {
    color: #707070;
  }
`;

export { StyledInput };
