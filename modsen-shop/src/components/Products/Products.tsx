import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { fetchProducts } from '@/store/reducers/ProductActionCreators';
import { IProduct } from '@/types';
import { useEffect } from 'react';
import { Product } from '../Product/Product';
import { Container, Wrapper } from './StyledProducts';

const Products = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const { products, isLoading, error } = useAppSelector(
    (state: any) => state.productReducer
  );

  const limitedProducts = products.slice(0, 6);
  return (
    <Container>
      <div className="title">
        <h1 className="h1">Shop The Latest</h1>
        <a href="" className="a">
          View All
        </a>
      </div>
      <Wrapper>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {products &&
          limitedProducts.map((product: IProduct) => (
            <Product key={product.id} product={product} />
          ))}
      </Wrapper>
    </Container>
  );
};

export { Products };
