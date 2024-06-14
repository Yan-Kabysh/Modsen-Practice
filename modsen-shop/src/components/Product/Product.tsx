import { ProductProps } from '@/types';
import { Wrapper, ImageWrapper } from './StyledProduct'; // Импорт нового стилизованного компонента

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={product.image} alt="" />
      </ImageWrapper>
      <span className="title">{product.title}</span>
      <span className="cost">$ {product.price}</span>
    </Wrapper>
  );
};

export { Product };
