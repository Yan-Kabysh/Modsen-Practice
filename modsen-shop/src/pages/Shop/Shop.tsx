import React, { useState } from 'react';

import { Products } from '@/components/Products/Products';
import { SortMenu } from '@/components/SortMenu/SortMenu';

import { Container, FiltersDiv, FiltersTitle, H1, Wrapper } from './StyledShop';
import { ReactComponent as FiltersIcon } from '@/images/filters.svg';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [sortSelect, setSortSelect] = useState('');
  const [shopBySelect, setShopBySelect] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openFiltersHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <H1>Shop The Latest</H1>

      <Wrapper>
        <SortMenu
          isOpen={isOpen}
          onSearch={setSearchTerm}
          onPriceChange={setPriceRange}
          onChange={setSortSelect}
          shopByOnChange={setShopBySelect}
        />
        <FiltersDiv onClick={openFiltersHandler}>
          <FiltersIcon />
          <FiltersTitle>{isOpen ? 'Hide filters' : 'Filters'}</FiltersTitle>
        </FiltersDiv>
        <Products
          // width="300px"
          // height="300px"
          searchTerm={searchTerm}
          priceRange={priceRange}
          sortBy={sortSelect}
          shopBy={shopBySelect}
        />
      </Wrapper>
    </Container>
  );
};

export { Shop };
