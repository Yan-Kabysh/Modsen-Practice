import React, { useEffect, useState } from 'react';

import { Button } from '@/components/Button/Button';
import { PriceSlider } from '@/components/PriceSlider/PriceSlider';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { Select } from '@/components/Select/Select';

import { Filters, Wrapper } from './StyledSortMenu';

const selectData = {
  options: [
    { value: 'desc', label: 'desc' },
    { value: 'asc', label: 'asc' },
  ],
};

const SortMenu = ({
  onSearch,
  onPriceChange,
  onChange,
  shopByOnChange,
  isOpen,
}: any) => {
  const [selectShopBy, setSelectShopBy] = useState<any[]>([]);
  const [resetInput, setResetInput] = useState(false);
  const [resetSelect, setResetSelect] = useState(false);

  const clickHandler = () => {
    onSearch();
    onChange();
    shopByOnChange();
    setResetInput((prev) => !prev);
    setResetSelect((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/categories'
        );
        const data = await response.json();
        setSelectShopBy(
          data.map((category: string) => ({ value: category, label: category }))
        );
      } catch (error) {
        console.error('Failed to fetch categories:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <SearchInput onSearch={onSearch} resetInput={resetInput} />
      <Filters isOpen={isOpen}>
        {selectShopBy && selectShopBy.length > 0 && (
          <Select
            label={'Shop By'}
            options={selectShopBy}
            onChange={shopByOnChange}
            reset={resetSelect}
          />
        )}
        <Select
          label={'Sort By'}
          options={selectData.options}
          onChange={onChange}
          reset={resetSelect}
        />
        <PriceSlider onPriceChange={onPriceChange} reset={resetInput} />
        <Button onClick={clickHandler}>Clean filters</Button>
      </Filters>
    </Wrapper>
  );
};

export { SortMenu };
