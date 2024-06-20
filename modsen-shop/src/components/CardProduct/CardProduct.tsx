import { IProduct } from '@/types';
import { Button } from '../Button/Button';
import { Price } from '../Product/StyledProduct';
import { H2, Img, Wrapper } from './StyledCardProduct';

const CardProduct = ({
  product,
  onRemove,
}: {
  product: IProduct;
  onRemove: () => void;
}) => {
  return (
    <Wrapper>
      <Img src={product.image} alt={product.title} />
      <H2>{product.title}</H2>
      <input type="number" defaultValue={1} />
      <Price>$ {product.price}</Price>
      <Price>$ {product.price}</Price>
      <Button onClick={onRemove}>Remove</Button>
    </Wrapper>
  );
};

export { CardProduct };
