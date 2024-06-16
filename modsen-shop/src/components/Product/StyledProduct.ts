import { styled } from 'styled-components';

const Wrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .title {
    font-family: 'DM Sans';
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
  .cost {
    font-family: 'DM Sans';
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: #a18a68;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export { Wrapper, ImageWrapper };
