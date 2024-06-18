import { styled } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 80px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export { Wrapper, Container };
