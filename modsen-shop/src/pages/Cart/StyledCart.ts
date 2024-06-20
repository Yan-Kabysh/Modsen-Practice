import { styled } from 'styled-components';

const ColumsTitles = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  margin-bottom: 40px;
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
`;

export { ColumsTitles, Items };
