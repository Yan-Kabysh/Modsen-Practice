import { useAppSelector } from '@/hooks/redux';
import { useEffect, useState } from 'react';
import { Price, StyledSlider, ValueDisplay, Wrapper } from './StyledSlider';

const PriceSlider = ({ onPriceChange }: any) => {
  const [priceRange, setPriceRange] = useState<number[]>([]);
  const [sliderValue, setSliderValue] = useState<number[]>([0, 100]);

  const { products } = useAppSelector((state) => state.productReducer);

  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map((product) => product.price);
      setPriceRange(prices);
      const initialSliderValue = [Math.min(...prices), Math.max(...prices)];
      setSliderValue(initialSliderValue);
      onPriceChange(initialSliderValue);
    }
  }, [products, onPriceChange]);

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
