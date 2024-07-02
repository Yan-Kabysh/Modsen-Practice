import '@/styles/variables.css';

import { styled } from 'styled-components';

const Wrapper = styled.div`
  margin-top: ${({ theme }) => theme.s} theme }) => theme.s};
  position: relative;
  display: inline-block;
  width: ${({ theme }) => theme.full}; /* Adjust width as needed */
`;

const SelectBox = styled.select`
  width: ${({ theme }) => theme.full};
  padding: 10px;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.white};
  border: ${({ theme }) => theme.borderSmall} solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.xxs};
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-22);
  background: transparent;
  color: ${({ theme }) => theme.colors.text};

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  option {
    background: ${({ theme }) => theme.colors.background};
  }
`;

const Arrow = styled.div`
  position: absolute;
  top: 30%;
  right: 10px;
  pointer-events: none;
  transform: translateY(-50%);
  border: solid ${({ theme }) => theme.colors.text};
  border-width: 0 ${({ theme }) => theme.xxxs} ${({ theme }) => theme.xxxs} 0;
  display: inline-block;
  padding: ${({ theme }) => theme.xxs};
  transform: rotate(45deg);
`;

export { Arrow, SelectBox, Wrapper };
