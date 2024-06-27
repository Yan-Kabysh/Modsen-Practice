import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateItemQuantity } from '@/helpers/cartControl';
import { useAppSelector } from '@/hooks/redux';
import { updateQuantity } from '@/store/reducers/CartReducer/CartReducer';

import {
  CountQuantity,
  QuantityButton,
  QuantityWrapper,
} from './StyledQuantityInput';

const QuantityInput = ({
  productId,
  initialQuantity,
  onQuantityChange,
}: {
  productId: number;
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);
  const dispatch = useDispatch();
  const userId = useAppSelector((state) => state.userReducer.user?.id);

  const handleQuantityChange = async (newQuantity: number) => {
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
    if (userId) {
      try {
        await updateItemQuantity(userId, productId, newQuantity);
        dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
      } catch (error) {
        console.error('Failed to update quantity:', error);
      }
    } else {
      console.error('User ID is null. Cannot update quantity.');
    }
  };

  return (
    <QuantityWrapper>
      <QuantityButton
        onClick={() => handleQuantityChange(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </QuantityButton>
      <CountQuantity>{quantity}</CountQuantity>
      <QuantityButton onClick={() => handleQuantityChange(quantity + 1)}>
        +
      </QuantityButton>
    </QuantityWrapper>
  );
};

export { QuantityInput };
