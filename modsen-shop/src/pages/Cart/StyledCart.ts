import { styled } from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const ColumsTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 100px 0 40px 0;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    gap: 40px;
    margin: 40px 0 40px 0;
  }
`;

const H1 = styled.h1`
  font-family: 'DM Sans';
  font-size: 33px;
  font-weight: 500;
  line-height: 43px;
`;

const Empty = styled.span`
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 300;
  line-height: 26px;
`;

const TotalWrapper = styled.div`
  text-align: right;
  margin-top: 40px;
`;

export { CartHeader, ColumsTitles, Empty, H1, Items, TotalWrapper };
