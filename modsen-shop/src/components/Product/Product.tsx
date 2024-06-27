import { ProductProps } from '@/../types/types';
import { ROUTES } from '@/constants/Path';

import * as S from './StyledProduct';
const Product: React.FC<ProductProps> = ({ product, width, height }) => {
  return (
    <S.StyledNavLink to={ROUTES.SHOP + '/' + product.id}>
      <S.Wrapper width={width}>
        <S.ImageWrapper height={height}>
          <S.Img src={product.image} alt="" />
        </S.ImageWrapper>
        <S.Title>{product.title}</S.Title>
        <S.Price>$ {product.price}</S.Price>
      </S.Wrapper>
    </S.StyledNavLink>
  );
};

export { Product };
