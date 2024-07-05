import '@/styles/variables.css';

import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const QuantityButton = styled.button`
  background: ${({ theme }) => theme.colors.background};
  border: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.half};
  width: ${({ theme }) => theme.m};
  height: ${({ theme }) => theme.m};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-20);
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition:
    background ${({ theme }) => theme.time},
    color ${({ theme }) => theme.time};

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
  max-width: 10%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: ${({ theme }) => theme.full};
    width: ${({ theme }) => theme.full};
    justify-content: flex-start;
    gap: ${({ theme }) => theme.s};
  }
`;

const CountQuantity = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-300);
  line-height: var(--line-height-26);
`;

export { CountQuantity, QuantityButton, QuantityWrapper };
