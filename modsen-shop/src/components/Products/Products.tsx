import { useEffect } from 'react';

import { IProduct } from '@/../types/types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import {
  fetchCategorieProducts,
  fetchProducts,
} from '@/store/reducers/ProductReducer/ProductActionCreators';

import { Product } from '../Product/Product';
import { Container, Wrapper } from './StyledProducts';

const Products = ({
  width,
  height,
  count,
  searchTerm = '',
  priceRange,
  sortBy,
  shopBy,
  excludeProductId,
}: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts(sortBy));
  }, [sortBy]);

  useEffect(() => {
    if (shopBy) {
      dispatch(fetchCategorieProducts(shopBy));
    }
  }, [shopBy]);

  const { products, isLoading, error } = useAppSelector(
    (state) => state.productReducer
  );

  const filteredProducts = products.filter((product: IProduct) => {
    const matchesSearchTerm = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesPriceRange = priceRange
      ? product.price >= priceRange[0] && product.price <= priceRange[1]
      : true;

    return matchesSearchTerm && matchesPriceRange;
  });

  let limitedProducts;

  if (excludeProductId) {
    limitedProducts = filteredProducts.filter(
      (product: { id: any }) => product.id !== excludeProductId
    );
  } else {
    limitedProducts = filteredProducts;
  }
  limitedProducts = count ? limitedProducts.slice(0, count) : limitedProducts;

  return (
    <Container>
      <Wrapper>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {limitedProducts.map((product: IProduct) => (
          <Product
            width={width}
            height={height}
            key={product.id}
            product={product}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export { Products };
