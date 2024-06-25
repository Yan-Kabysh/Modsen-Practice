import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #d8d8d8;
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: #000000;
  outline: none;
  margin-top: 50px;

  &::placeholder {
    color: #707070;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    line-height: 20px;
  }
`;

export { StyledTextArea };
