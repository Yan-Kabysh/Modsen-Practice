import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IProduct } from '@/types';
import { useAppSelector } from '@/hooks/redux';
import {
  getUserCart,
  removeItemFromCart,
} from '../../firebaseControl/cartControl';
import { removeItem, setCart } from '@/store/reducers/CartReducer/CartReducer';
import { H1 } from '../Shop/StyledShop';
import { CardProduct } from '@/components/CardProduct/CardProduct';
import { ColumsTitles, Items } from './StyledCart';
import { Span } from '../Error/StyledError';

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const user = useAppSelector((state) => state.userReducer.user);
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.id) {
      getUserCart(user.id)
        .then((items) => {
          dispatch(setCart(items));
          setLoading(false);
        })
        .catch((error) => {
          console.error('Failed to load cart items:', error);
          setLoading(false);
        });
    }
  }, [user, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const removeClick = async (id: number) => {
    if (user && user.id) {
      try {
        await removeItemFromCart(user.id, id);
        dispatch(removeItem(id));
        alert('Product removed from cart');
      } catch (error) {
        console.error('Failed to remove product from cart:', error);
        alert('Failed to remove product from cart. Please try again later.');
      }
    } else {
      alert('Please log in to add items to your cart');
    }
  };

  return (
    <div>
      <H1>Cart</H1>
      <ColumsTitles>
        <Span>PRODUCT</Span>
        <Span>TITLE</Span>
        <Span>QUANTITY</Span>
        <Span>PRICE</Span>
        <Span>TOTAL PRICE</Span>
        <Span>ACTION</Span>
      </ColumsTitles>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Items>
          {cartItems.map((item: IProduct) => (
            <CardProduct
              key={item.id}
              product={item}
              onRemove={() => removeClick(item.id)}
            />
          ))}
        </Items>
      )}
    </div>
  );
};

export { Cart };
