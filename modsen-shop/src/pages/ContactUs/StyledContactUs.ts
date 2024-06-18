import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 0 auto;
  text-align: center;
`;

const Span = styled.span`
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  margin-bottom: 50px;
`;

const InputsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 90px;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export { Wrapper, Span, InputsDiv, ButtonDiv };
