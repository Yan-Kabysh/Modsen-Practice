import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { IProduct } from '@/../types/types';
import { Button } from '@/components/Button/Button';
import { CardProduct } from '@/components/CardProduct/CardProduct';
import { Price } from '@/components/CardProduct/StyledCardProduct';
import { auth } from '@/firebase';
import {
  handleAuthStateChange,
  handleLogOut,
  handleQuantityChange,
  handleRemoveItem,
  removeItemFromCart,
  updateItemQuantity,
} from '@/helpers/cartControl';
import { useAppSelector } from '@/hooks/redux';

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
    handleAuthStateChange({ auth, dispatch, navigate, setLoading });
  }, [auth, dispatch, navigate]);
  useEffect(() => {
    const price = cartItems.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setTotal(price);
  }, [cartItems]);

  const removeClick = async (id: number) => {
    await handleRemoveItem({
      user,
      dispatch,
      id,
      setRemovingItems,
      removeItemFromCart,
    });
  };

  const handleChangeQuantity = async (
    productId: number,
    newQuantity: number
  ) => {
    await handleQuantityChange({
      user,
      dispatch,
      updateItemQuantity,
      productId,
      newQuantity,
    });
  };

  const handleLogout = async () => {
    await handleLogOut({ dispatch });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <CartHeader>
        <H1>Cart</H1>
        <Button onClick={handleLogout}>Log Out</Button>
      </CartHeader>

      {cartItems.length === 0 ? (
        <Empty>Your cart is empty</Empty>
      ) : (
        <Items>
          {cartItems.map((item: IProduct) => (
            <CardProduct
              data-testid="cart-product"
              key={item.id}
              product={item}
              remove={removingItems[item.id]}
              onRemove={() => removeClick(item.id)}
              onQuantityChange={(newQuantity: number) =>
                handleChangeQuantity(item.id, newQuantity)
              }
            />
          ))}
        </Items>
      )}
      <TotalWrapper>
        {cartItems.length !== 0 && (
          <Empty>Total cost: {<Price>$ {total.toFixed(2)}</Price>}</Empty>
        )}
      </TotalWrapper>
    </>
  );
};

export { Cart };
