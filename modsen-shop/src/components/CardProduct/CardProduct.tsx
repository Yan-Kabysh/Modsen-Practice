import { IProduct } from '@/../types/types';
import { ROUTES } from '@/constants/Path';

import { Button } from '../Button/Button';
import { QuantityInput } from '../QuantityInput/QuantityInput';
import {
  H2,
  Img,
  Price,
  PricesSpan,
  StyledLink,
  Wrapper,
} from './StyledCardProduct';

const CardProduct = ({
  product,
  onRemove,
  onQuantityChange,
  remove,
}: {
  product: IProduct;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
  remove: boolean;
}) => {
  return (
    <Wrapper>
      <StyledLink to={ROUTES.SHOP + '/' + product.id}>
        <Img src={product.image} alt={product.title} />
      </StyledLink>
      <H2>{product.title}</H2>

      <QuantityInput
        productId={product.id}
        initialQuantity={product.quantity || 1}
        onQuantityChange={onQuantityChange}
      />
      <Price>
        {<PricesSpan>Price:</PricesSpan>}$ {product.price.toFixed(2)}
      </Price>
      <Price>
        {' '}
        {<PricesSpan>Total:</PricesSpan>} ${' '}
        {(product.price * product.quantity).toFixed(2)}
      </Price>
      <Button width={'50%'} onClick={onRemove}>
        {remove ? 'Removing...' : 'Remove'}
      </Button>
    </Wrapper>
  );
};

export { CardProduct };
