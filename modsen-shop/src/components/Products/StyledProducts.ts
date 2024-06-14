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
  margin-top: 60px;
  .a {
    font-family: 'DM Sans';
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: #a18a68;
    text-decoration: none;
  }
  .h1 {
    font-family: 'DM Sans';
    font-size: 33px;
    font-weight: 500;
    line-height: 43px;
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
`;

export { Wrapper, Container };
