import '@/styles/variables.css';

import { styled } from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const ColumsTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.m};
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.m};
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.xxl} 0 ${({ theme }) => theme.m} 0;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.m};
    margin: ${({ theme }) => theme.m} 0 ${({ theme }) => theme.m} 0;
  }
`;

const H1 = styled.h1`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-33);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-43);
`;

const Empty = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-300);
  line-height: var(--line-height-26);
`;

const TotalWrapper = styled.div`
  text-align: right;
  margin-top: ${({ theme }) => theme.m};
`;

export { CartHeader, ColumsTitles, Empty, H1, Items, TotalWrapper };
