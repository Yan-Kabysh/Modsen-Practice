import styled from 'styled-components';
import Slider from 'react-slider';

// StyledSlider.js
const StyledSlider = styled(Slider)`
  height: 2px;
  margin: 20px auto;
  position: relative;
  background: #d8d8d8;

  .track {
    position: absolute;
    top: 0;
    bottom: 0;
    background: ${(props) =>
      props.theme.title === 'dark'
        ? '#9A9A9A'
        : '#d8d8d8'}; // Цвет трека слайдера
  }

  .track-1 {
    background: ${(props) =>
      props.theme.colors.text}; // Цвет выбранного диапазона
  }

  .thumb {
    height: 10px;
    width: 2px;
    cursor: pointer;
    position: absolute;
    top: 1px;
    margin-top: -5px;
  }
`;

const ValueDisplay = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #707070;
`;

const Price = styled.div`
  text-align: left;
`;

export { StyledSlider, ValueDisplay, Wrapper, Price };
