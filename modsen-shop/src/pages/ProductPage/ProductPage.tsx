import { FacebookIcon } from '@/components/Icons/Facebook';
import { InstagramIcon } from '@/components/Icons/InstagramIcon';
import { MailIcon } from '@/components/Icons/MailIcon';
import { TwitterIcon } from '@/components/Icons/TwitterIcon';
import { Span } from '@/components/Product/StyledProduct';
import { Products } from '@/components/Products/Products';
import { StarRating } from '@/components/StarRating/StarRating';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectedProductFetch } from '@/store/reducers/ProductActionCreators';
import { IProduct } from '@/types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Categories,
  Category,
  Desc,
  DescDiv,
  DescDivTitle,
  H2,
  Icons,
  ImageContainer,
  Info,
  ProductWrapper,
  Rating,
  SelectedImg,
  Similar,
  SmallImages,
  SmallImg,
  TitleSpan,
  Wrapper,
} from './StyledProductPage';

const ProductPage = () => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productReducer.product);
  const [selectedImage, setSelectedImage] = useState('');
  const [similarItems, setSimilarItems] = useState('');

  useEffect(() => {
    dispatch(selectedProductFetch(id));
  }, [id, dispatch]);

  useEffect(() => {
    // Перемотать страницу вверх при загрузке компонента App
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (product && product.image) {
      setSelectedImage(product.image);
    }
    if (product && product.category) {
      setSimilarItems(product.category);
    }
  }, [product]);

  if (!product) {
    return <div>Loading...</div>; // Добавьте индикатор загрузки
  }

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
          <Rating>
            {product.rating && <StarRating value={product.rating.rate} />}
            {product.rating && (
              <Desc>{product.rating.count} customers review</Desc>
            )}
          </Rating>
          <Desc>{product.description}</Desc>
          <Icons>
            <MailIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Icons>
          <Categories>
            <Category>Categories:</Category>
            <Desc>{product.category}</Desc>
          </Categories>
        </Info>
      </ProductWrapper>
      <DescDiv>
        <DescDivTitle>
          <TitleSpan>Description</TitleSpan>
        </DescDivTitle>
        <Desc>{product.description}</Desc>
      </DescDiv>
      <Similar>
        <H2>Similar Items</H2>
        <Products
          excludeProductId={product.id}
          count={3}
          shopBy={similarItems}
        />
      </Similar>
    </Wrapper>
  );
};

export { ProductPage };
