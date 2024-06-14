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
  justify-content: center; /* Центрирование изображения по горизонтали */
  align-items: center; /* Центрирование изображения по вертикали */

  img {
    max-width: 100%; /* Максимальная ширина изображения равна ширине ImageWrapper */
    max-height: 100%; /* Максимальная высота изображения равна высоте ImageWrapper */
    object-fit: contain; /* Заполнение изображения без искажений */
  }
`;

export { Wrapper, ImageWrapper };
