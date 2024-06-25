import { ProductProps } from '@/../types/types';
import { ROUTES } from '@/constants/Path';

import {
  ImageWrapper,
  Img,
  Price,
  StyledNavLink,
  Title,
  Wrapper,
} from './StyledProduct'; // Импорт нового стилизованного компонента
const Product: React.FC<ProductProps> = ({ product, width, height }) => {
  return (
    <StyledNavLink to={ROUTES.SHOP + '/' + product.id}>
      <Wrapper width={width}>
        <ImageWrapper height={height}>
          <Img src={product.image} alt="" />
        </ImageWrapper>
        <Title>{product.title}</Title>
        <Price>$ {product.price}</Price>
      </Wrapper>
    </StyledNavLink>
  );
};

export { Product };
