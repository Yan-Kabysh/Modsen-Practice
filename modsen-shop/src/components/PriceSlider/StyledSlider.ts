import '@/styles/variables.css';

import styled from 'styled-components';

const StyledSlider = styled.div`
  position: relative;
  width: ${({ theme }) => theme.full};
`;

const SliderTrack = styled.div`
  position: relative;
  height: ${({ theme }) => theme.xxs};
  background: ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.s} 0;
`;

const SliderThumb = styled.input`
  position: absolute;
  -webkit-appearance: none;
  appearance: none;
  width: ${({ theme }) => theme.full};
  height: ${({ theme }) => theme.xxs};
  background: transparent;
  pointer-events: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 3px;
    height: ${({ theme }) => theme.thumbSize};
    background: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    pointer-events: auto;
  }

  &::-moz-range-thumb {
    width: ${({ theme }) => theme.thumbSize};
    height: ${({ theme }) => theme.thumbSize};
    background: ${({ theme }) => theme.colors.text};
    cursor: pointer;
    pointer-events: auto;
  }
`;

const Wrapper = styled.div`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-22);
  color: ${({ theme }) => theme.colors.darkGray};
`;

const Price = styled.div`
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
`;

const ValueDisplay = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.bigDots};
`;

export { Price, SliderThumb, SliderTrack, StyledSlider, ValueDisplay, Wrapper };
