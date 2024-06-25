import { useEffect, useState } from 'react';

import { useAppSelector } from '@/hooks/redux';

import { Price, StyledSlider, ValueDisplay, Wrapper } from './StyledSlider';

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
    // if (reset && priceRange.length > 0) {
    const initialSliderValue = [
      Math.min(...priceRange),
      Math.max(...priceRange),
    ];
    setSliderValue(initialSliderValue);
    onPriceChange(initialSliderValue);
    // }
  }, [reset, priceRange, onPriceChange]);

  const handleSliderChange = (value: number | readonly number[]) => {
    const newSliderValue = value as number[];
    setSliderValue(newSliderValue);
    onPriceChange(newSliderValue);
  };

  return (
    <Wrapper>
      {priceRange.length > 0 && (
        <>
          <StyledSlider
            min={Math.min(...priceRange)}
            max={Math.max(...priceRange)}
            defaultValue={sliderValue}
            value={sliderValue}
            onChange={handleSliderChange}
          />
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
