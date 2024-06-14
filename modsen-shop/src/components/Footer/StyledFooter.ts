import styled from 'styled-components';

const Wrapper = styled.div`
  border-top: 1px solid #d8d8d8;
  margin: 255px 0 90px 0;
  .refs-email {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
  }
  .refs {
    display: flex;
    gap: 40px;
    a {
      font-family: 'DM Sans';
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      color: #707070;
      text-decoration: none;
    }
  }
  .policy-networks {
    display: flex;
    justify-content: space-between;
    .policy {
      font-family: 'DM Sans';
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      color: #707070;
    }
    .networks {
      display: flex;
      gap: 30px;
    }
  }
`;

export { Wrapper };
