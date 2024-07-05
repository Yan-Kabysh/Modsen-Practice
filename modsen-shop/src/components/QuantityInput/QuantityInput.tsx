import { useState } from 'react';

import { useQuantityChangeHandler } from '@/helpers/cartControl';
import { useAppSelector } from '@/hooks/redux';

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
  const userId = useAppSelector((state) => state.userReducer.user?.id);

  const handleQuantityChange = useQuantityChangeHandler(
    userId,
    productId,
    setQuantity,
    onQuantityChange
  );

  return (
    <QuantityWrapper>
      <QuantityButton
        onClick={() => handleQuantityChange(quantity - 1)}
        disabled={quantity <= 1}
      >
        -
      </QuantityButton>
      <CountQuantity data-testid="quantity">{quantity}</CountQuantity>
      <QuantityButton onClick={() => handleQuantityChange(quantity + 1)}>
        +
      </QuantityButton>
    </QuantityWrapper>
  );
};

export { QuantityInput };
