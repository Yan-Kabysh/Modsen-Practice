import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProductProps } from '@/../types/types';
import { ROUTES } from '@/constants/Path';
import { handleAddToCart } from '@/helpers/cartControl';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

import * as S from './StyledProduct';
const Product: React.FC<ProductProps> = ({ product, width, height }) => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userReducer.user);

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  const toCartClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(ROUTES.CART);
  };

  const addHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleAddToCart(user, product, setAdd, dispatch, navigate);
  };
  return (
    <S.StyledNavLink data-testid="product" to={ROUTES.SHOP + '/' + product.id}>
      <S.Wrapper width={width}>
        <S.ImageWrapper height={height}>
          <S.Img src={product.image} alt="" />
          {isProductInCart ? (
            <S.Button onClick={toCartClickHandler}>GO TO CART</S.Button>
          ) : (
            <S.Button onClick={addHandler}>
              {add ? 'ADDING...' : 'ADD TO CART'}
            </S.Button>
          )}
        </S.ImageWrapper>
        <S.Title>{product.title}</S.Title>
        <S.Price>$ {product.price}</S.Price>
      </S.Wrapper>
    </S.StyledNavLink>
  );
};

export { Product };
