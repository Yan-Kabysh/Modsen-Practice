import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/Button/Button';
import { Products } from '@/components/Products/Products';
import { StarRating } from '@/components/StarRating/StarRating';
import { ROUTES } from '@/constants/Path';
import { SocialRefs } from '@/constants/SocialRefs';
import { auth } from '@/firebase';
import { handleAddToCart, handleItemsLoad } from '@/helpers/cartControl';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { ReactComponent as FacebookIcon } from '@/images/facebook.svg';
import { ReactComponent as InstagramIcon } from '@/images/instagram.svg';
import { ReactComponent as MailIcon } from '@/images/mail.svg';
import { ReactComponent as TwitterIcon } from '@/images/twiter.svg';
import { selectedProductFetch } from '@/store/reducers/ProductReducer/ProductActionCreators';

import * as S from './StyledProductPage';

const ProductPage = () => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productReducer.product);
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const [selectedImage, setSelectedImage] = useState('');
  const [similarItems, setSimilarItems] = useState('');
  const user = useAppSelector((state) => state.userReducer.user);
  const navigate = useNavigate();
  const [add, setAdd] = useState(false);
  const [descriptionSpan, setDecriptionSpan] = useState(false);

  useEffect(() => {
    dispatch(selectedProductFetch(id));
  }, [id, dispatch]);

  useEffect(() => {
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

  useEffect(() => {
    handleItemsLoad(auth, dispatch, navigate);
  }, [auth, dispatch, navigate]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const addHandler = () => {
    handleAddToCart(user, product, setAdd, dispatch, navigate);
  };

  const handleGoToCart = () => {
    navigate(ROUTES.CART);
  };

  const descClickHandler = () => {
    setDecriptionSpan((prev) => !prev);
  };

  const imgClickHandler = () => {
    setSelectedImage(product.image);
  };

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  return (
    <S.Wrapper>
      <S.ProductWrapper>
        <S.ImageContainer>
          <S.SmallImages>
            <S.SmallImgWrapper>
              <S.SmallImg src={product.image} onClick={imgClickHandler} />
            </S.SmallImgWrapper>
          </S.SmallImages>
          <S.SelectedImgWrapper>
            <S.SelectedImg src={selectedImage} />
          </S.SelectedImgWrapper>
        </S.ImageContainer>
        <S.Info>
          <S.H2>{product.title}</S.H2>
          <S.Price>$ {product.price}</S.Price>
          <S.Rating>
            {product.rating && <StarRating value={product.rating.rate} />}
            {product.rating && (
              <S.Desc>{product.rating.count} customers review</S.Desc>
            )}
          </S.Rating>
          <S.Desc>{product.description}</S.Desc>
          {isProductInCart ? (
            <Button onClick={handleGoToCart}>Go to Cart</Button>
          ) : (
            <Button onClick={addHandler}>
              {add ? 'Adding...' : 'Add to Cart'}
            </Button>
          )}
          <S.Icons>
            <a href={SocialRefs.mail} target="_blank" rel="noopener noreferrer">
              <MailIcon />
            </a>
            <a
              href={SocialRefs.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              href={SocialRefs.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href={SocialRefs.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </S.Icons>
          <S.Categories>
            <S.Category>Categories:</S.Category>
            <S.Desc>{product.category}</S.Desc>
          </S.Categories>
        </S.Info>
      </S.ProductWrapper>
      <S.DescDiv>
        <S.DescDivTitle onClick={descClickHandler}>
          <S.TitleSpan>Description</S.TitleSpan>
          <S.StyledArrowIcon isOpen={descriptionSpan} />
        </S.DescDivTitle>
        <S.Description isOpen={descriptionSpan}>
          {product.description}
        </S.Description>
      </S.DescDiv>
      <S.Similar>
        <S.H2>Similar Items</S.H2>
        <Products
          excludeProductId={product.id}
          count={3}
          shopBy={similarItems}
        />
      </S.Similar>
    </S.Wrapper>
  );
};

export { ProductPage };
