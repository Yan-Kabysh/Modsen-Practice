import { styled } from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  position: relative;
  display: inline-block;
  width: 100%; /* Adjust width as needed */
`;

const SelectBox = styled.select`
  width: 100%;
  padding: 10px;
  appearance: none;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #000;
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 30%;
  right: 10px;
  pointer-events: none;
  transform: translateY(-50%);
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
`;

export { Wrapper, SelectBox, Arrow };
