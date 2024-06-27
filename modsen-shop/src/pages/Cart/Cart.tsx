import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IProduct } from '@/../types/types';
import { Button } from '@/components/Button/Button';
import { CardProduct } from '@/components/CardProduct/CardProduct';
import { Price } from '@/components/CardProduct/StyledCardProduct';
import { ROUTES } from '@/constants/Path';
import { auth } from '@/firebase';
import { useAppSelector } from '@/hooks/redux';
import {
  removeItem,
  setCart,
  updateQuantity,
} from '@/store/reducers/CartReducer/CartReducer';
import {
  removeUser,
  userFetchingSuccess,
} from '@/store/reducers/UserReducer/UserSlice';

import {
  getUserCart,
  removeItemFromCart,
  updateItemQuantity,
} from '../../firebaseControl/cartControl';
import { CartHeader, Empty, H1, Items, TotalWrapper } from './StyledCart';

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const user = useAppSelector((state) => state.userReducer.user);
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [removingItems, setRemovingItems] = useState<{
    [key: number]: boolean;
  }>({});
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate(ROUTES.LOGIN);
    } else {
      onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          console.log('currentUser', currentUser);
          const userId = currentUser.uid;
          dispatch(
            userFetchingSuccess({ id: userId, email: currentUser.email, token })
          );
          try {
            const items = await getUserCart(userId);
            const itemsWithQuantity = items.map((item: IProduct) => ({
              ...item,
              quantity: item.quantity || 1,
            }));
            dispatch(setCart(itemsWithQuantity));
            setLoading(false);
          } catch (error) {
            console.error('Failed to load cart items:', error);
            setLoading(false);
          }
        } else {
          navigate(ROUTES.LOGIN);
          setLoading(false);
        }
      });
    }
  }, [auth, dispatch, navigate]);
  useEffect(() => {
    const price = cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotal(price);
  }, [cartItems]);

  const removeClick = async (id: number) => {
    if (user && user.id) {
      try {
        setRemovingItems((prev) => ({ ...prev, [id]: true }));
        await removeItemFromCart(user.id, id);
        dispatch(removeItem(id));
        setRemovingItems((prev) => ({ ...prev, [id]: false }));
      } catch (error) {
        console.error('Failed to remove product from cart:', error);
        alert('Failed to remove product from cart. Please try again later.');
      }
    } else {
      alert('Please log in to add items to your cart');
    }
  };

  const handleQuantityChange = async (
    productId: number,
    newQuantity: number
  ) => {
    if (user && user.id) {
      try {
        await updateItemQuantity(user.id, productId, newQuantity);
        dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
      } catch (error) {
        console.error('Failed to update product quantity in cart:', error);
      }
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      dispatch(setCart([]));
      dispatch(removeUser());
      console.log('User logged out');
    } catch (error) {
      console.error('Error logging out user:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <CartHeader>
        <H1>Cart</H1>
        <Button onClick={handleLogOut}>Log Out</Button>
      </CartHeader>

      {cartItems.length === 0 ? (
        <Empty>Your cart is empty</Empty>
      ) : (
        <Items>
          {cartItems.map((item: IProduct) => (
            <CardProduct
              key={item.id}
              product={item}
              remove={removingItems[item.id]}
              onRemove={() => removeClick(item.id)}
              onQuantityChange={(newQuantity: number) =>
                handleQuantityChange(item.id, newQuantity)
              }
            />
          ))}
        </Items>
      )}
      <TotalWrapper>
        <Empty>Total cost: {<Price>$ {total.toFixed(2)}</Price>}</Empty>
      </TotalWrapper>
    </>
  );
};

export { Cart };
