import { useEffect, useState } from 'react';

import { useAppSelector } from '@/hooks/redux';

import {
  Price,
  SliderThumb,
  SliderTrack,
  StyledSlider,
  ValueDisplay,
  Wrapper,
} from './StyledSlider';

const PriceSlider = ({ onPriceChange, reset }: any) => {
  const [priceRange, setPriceRange] = useState<number[]>([]);
  const [sliderValue, setSliderValue] = useState<number[]>([0, 100]);

  const { products } = useAppSelector((state) => state.productReducer);

  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map((product: { price: any }) => product.price);
      setPriceRange(prices);
      const initialSliderValue = [Math.min(...prices), Math.max(...prices)];
      setSliderValue(initialSliderValue);
      onPriceChange(initialSliderValue);
    }
  }, [products, onPriceChange]);

  useEffect(() => {
    const initialSliderValue = [
      Math.min(...priceRange),
      Math.max(...priceRange),
    ];
    setSliderValue(initialSliderValue);
    onPriceChange(initialSliderValue);
  }, [reset, priceRange, onPriceChange]);

  const handleSliderChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newSliderValue = [...sliderValue];
    const newValue = +e.target.value;

    if (index === 0 && newValue <= sliderValue[1]) {
      newSliderValue[0] = newValue;
    } else if (index === 1 && newValue >= sliderValue[0]) {
      newSliderValue[1] = newValue;
    }

    setSliderValue(newSliderValue);
    onPriceChange(newSliderValue);
  };

  return (
    <Wrapper>
      {priceRange.length > 0 && (
        <>
          <StyledSlider>
            <SliderTrack>
              <SliderThumb
                data-testid="slider-min"
                type="range"
                step={0.01}
                min={Math.min(...priceRange)}
                max={Math.max(...priceRange)}
                value={sliderValue[0]}
                onChange={(e: any) => handleSliderChange(e, 0)}
              />
              <SliderThumb
                data-testid="slider-max"
                type="range"
                step={0.01}
                min={Math.min(...priceRange)}
                max={Math.max(...priceRange)}
                value={sliderValue[1]}
                onChange={(e: any) => handleSliderChange(e, 1)}
              />
            </SliderTrack>
          </StyledSlider>
          <ValueDisplay>
            <Price>
              Price: ${sliderValue[0]} - ${sliderValue[1]}
            </Price>
          </ValueDisplay>
        </>
      )}
    </Wrapper>
  );
};

export { PriceSlider };
