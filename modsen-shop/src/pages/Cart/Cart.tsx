import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IProduct } from '@/types';
import { useAppSelector } from '@/hooks/redux';
import {
  getUserCart,
  removeItemFromCart,
} from '../../firebaseControl/cartControl';
import { removeItem, setCart } from '@/store/reducers/CartReducer/CartReducer';

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
      <h1>Cart</h1>
      <h1>{user.email}</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item: IProduct) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <img src={item.image} alt="" />
              <button onClick={() => removeClick(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { Cart };
