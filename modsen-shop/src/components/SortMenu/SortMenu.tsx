import React, { useEffect, useState } from 'react';
import { SearchInput } from '@/components/SearchInput/SearchInput';
import { PriceSlider } from '../PriceSlider/PriceSlider';
import { Select } from '../Select/Select';
import { Wrapper } from './StyledSortMenu';

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
}: any) => {
  const [selectShopBy, setSelectShopBy] = useState<any[]>([]);

  const clickHandler = () => {
    onSearch();
    onPriceChange();
    onChange();
    shopByOnChange();
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
      <SearchInput onSearch={onSearch} />
      {selectShopBy && selectShopBy.length > 0 && (
        <Select
          label={'Shop By'}
          options={selectShopBy}
          onChange={shopByOnChange}
        />
      )}
      <Select
        label={'Sort By'}
        options={selectData.options}
        onChange={onChange}
      />
      <PriceSlider onPriceChange={onPriceChange} />
      {/* <button onClick={clickHandler}>Filter</button> */}
    </Wrapper>
  );
};

export { SortMenu };
