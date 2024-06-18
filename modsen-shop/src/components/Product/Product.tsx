import { ProductProps } from '@/types';
import { Wrapper, ImageWrapper, StyledNavLink, Span } from './StyledProduct'; // Импорт нового стилизованного компонента
const productItemClick = () => {};
const Product: React.FC<ProductProps> = ({ product, width, height }) => {
  return (
    <StyledNavLink to={'/shop/' + product.id}>
      <Wrapper width={width}>
        <ImageWrapper height={height}>
          <img src={product.image} alt="" />
        </ImageWrapper>
        <span className="title">{product.title}</span>
        <Span>$ {product.price}</Span>
      </Wrapper>
    </StyledNavLink>
  );
};

export { Product };
