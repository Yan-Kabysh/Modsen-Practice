import '@/styles/variables.css';

import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const QuantityButton = styled.button`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.text};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-20);
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.darkGray};
    border-color: ${({ theme }) => theme.colors.darkGray};
    cursor: not-allowed;
  }
`;

const QuantityWrapper = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    justify-content: flex-start;
    gap: 20px;
  }
`;

const CountQuantity = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-300);
  line-height: var(--line-height-26);
`;

export { CountQuantity, QuantityButton, QuantityWrapper };
