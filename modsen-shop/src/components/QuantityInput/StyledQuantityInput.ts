import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const QuantityButton = styled.button`
  background: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.text};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition:
    background 0.3s,
    color 0.3s;

  &:hover {
    background: ${(props) => props.theme.colors.text};
    color: ${(props) => props.theme.colors.background};
  }

  &:disabled {
    background: #e0e0e0;
    color: #a0a0a0;
    border-color: #a0a0a0;
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
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 300;
  line-height: 26px;
`;

export { CountQuantity, QuantityButton, QuantityWrapper };
