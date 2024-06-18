import { FacebookIcon } from '@/components/Icons/Facebook';
import { InstagramIcon } from '@/components/Icons/InstagramIcon';
import { MailIcon } from '@/components/Icons/MailIcon';
import { TwitterIcon } from '@/components/Icons/TwitterIcon';
import { Span } from '@/components/Product/StyledProduct';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectedProductFetch } from '@/store/reducers/ProductActionCreators';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Categories,
  Category,
  Desc,
  H2,
  Icons,
  ImageContainer,
  Info,
  ProductWrapper,
  SelectedImg,
  SmallImages,
  SmallImg,
  Wrapper,
} from './StyledProductPage';

const ProductPage = () => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productReducer.product);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    dispatch(selectedProductFetch(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (product && product.image) {
      setSelectedImage(product.image);
    }
  }, [product]);

  return (
    <Wrapper>
      <ProductWrapper>
        <ImageContainer>
          <SmallImages>
            <SmallImg
              src={product.image}
              onClick={() => setSelectedImage(product.image)}
            />
          </SmallImages>
          <SelectedImg src={selectedImage} />
        </ImageContainer>
        <Info>
          <H2>{product.title}</H2>
          <Span>$ {product.price}</Span>
          <Desc>{product.description}</Desc>
          <Icons>
            <MailIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Icons>
          <Categories>
            <Category>Categories</Category>
            <Desc>{product.category}</Desc>
          </Categories>
        </Info>
      </ProductWrapper>
    </Wrapper>
  );
};

export { ProductPage };
