import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { IProduct } from '@/../types/types';
import { Button } from '@/components/Button/Button';
import { Products } from '@/components/Products/Products';
import { StarRating } from '@/components/StarRating/StarRating';
import { ROUTES } from '@/constants/Path';
import { auth } from '@/firebase';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { ReactComponent as FacebookIcon } from '@/images/facebook.svg';
import { ReactComponent as InstagramIcon } from '@/images/instagram.svg';
import { ReactComponent as MailIcon } from '@/images/mail.svg';
import { ReactComponent as TwitterIcon } from '@/images/twiter.svg';
import { addItem, setCart } from '@/store/reducers/CartReducer/CartReducer';
import { selectedProductFetch } from '@/store/reducers/ProductReducer/ProductActionCreators';
import { userFetchingSuccess } from '@/store/reducers/UserReducer/UserSlice';

import { addItemToCart, getUserCart } from '../../firebaseControl/cartControl';
import * as S from './StyledProductPage';

const ProductPage = () => {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productReducer.product);
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const [selectedImage, setSelectedImage] = useState('');
  const [similarItems, setSimilarItems] = useState('');
  const user = useAppSelector((state) => state.userReducer.user);
  const navigate = useNavigate(); // for redirection
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
    const token = localStorage.getItem('token');
    if (token) {
      onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          const userId = currentUser.uid;
          dispatch(
            userFetchingSuccess({ id: userId, email: currentUser.email, token })
          );
          try {
            const items = await getUserCart(userId);
            const itemsWithQuantity = items.map((item: IProduct) => ({
              ...item,
              quantity: item.quantity || 1,
            }));
            dispatch(setCart(itemsWithQuantity));
          } catch (error) {
            console.error('Failed to load cart items:', error);
          }
        } else {
          navigate(ROUTES.LOGIN);
        }
      });
    }
  }, [auth, dispatch, navigate]);

  if (!product) {
    return <div>Loading...</div>; // Loading indicator
  }

  const handleAddToCart = async () => {
    if (localStorage.getItem('token')) {
      if (user && user.id) {
        try {
          setAdd(true);
          await addItemToCart(user.id, product);
          dispatch(addItem(product)); // Update Redux state
          setAdd(false);
          // alert('Product added to cart');
        } catch (error) {
          alert('Failed to add product to cart. Please try again later.');
        }
      } else {
        alert('Please log in to add items to your cart');
      }
    } else {
      navigate(ROUTES.LOGIN);
    }
  };

  const handleGoToCart = () => {
    navigate(ROUTES.CART);
  };

  const descClickHandler = () => {
    setDecriptionSpan((prev) => !prev);
  };

  const isProductInCart = cartItems.some((item) => item.id === product.id);

  return (
    <S.Wrapper>
      <S.ProductWrapper>
        <S.ImageContainer>
          <S.SmallImages>
            <S.SmallImgWrapper>
              <S.SmallImg
                src={product.image}
                onClick={() => setSelectedImage(product.image)}
              />
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
            <Button onClick={handleAddToCart}>
              {add ? 'Adding...' : 'Add to Cart'}
            </Button>
          )}
          <S.Icons>
            <MailIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
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
