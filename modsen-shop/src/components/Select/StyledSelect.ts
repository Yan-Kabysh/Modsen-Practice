import { styled } from 'styled-components';
import '@/styles/variables.css'


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
  background-color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.gray};
  border-radius: 4px;
  color: ${({theme}) => theme.colors.darkGray};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-22);
  background: transparent;
  color: ${({theme}) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  option {
    background: ${({theme}) => theme.colors.background};
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 30%;
  right: 10px;
  pointer-events: none;
  transform: translateY(-50%);
  border: solid ${({theme}) => theme.colors.text};
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 4px;
  transform: rotate(45deg);
`;

export { Arrow, SelectBox, Wrapper };
