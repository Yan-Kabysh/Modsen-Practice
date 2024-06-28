import Slider from 'react-slider';
import styled from 'styled-components';

import '@/styles/variables.css'

const StyledSlider = styled(Slider)`
  height: 2px;
  margin: 20px auto;
  position: relative;
  background: ${({theme}) => theme.colors.gray};

  .track {
    position: absolute;
    top: 0;
    bottom: 0;
    background: ${({theme}) =>
      theme.title === 'dark' ? theme.colors.darkGray : theme.colors.gray};
  }

  .track-1 {
    background: ${({theme}) => theme.colors.text};
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
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-22);
  color: ${({theme}) => theme.colors.darkGray};
`;

const Price = styled.div`
color: ${({theme}) => theme.colors.text};
  text-align: left;
`;

export { Price, StyledSlider, ValueDisplay, Wrapper };
