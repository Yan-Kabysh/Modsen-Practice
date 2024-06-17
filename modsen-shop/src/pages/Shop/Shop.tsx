import React, { useState } from 'react';
import { Products } from '@/components/Products/Products';
import { SortMenu } from '@/components/SortMenu/SortMenu';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [sortSelect, setSortSelect] = useState('');
  const [shopBySelect, setShopBySelect] = useState('');

  console.log(shopBySelect);

  return (
    <>
      <SortMenu
        onSearch={setSearchTerm}
        onPriceChange={setPriceRange}
        onChange={setSortSelect}
        shopByOnChange={setShopBySelect}
      />
      <Products
        width="300px"
        height="300px"
        searchTerm={searchTerm}
        priceRange={priceRange}
        sortBy={sortSelect}
        shopBy={shopBySelect}
      />
    </>
  );
};

export { Shop };
