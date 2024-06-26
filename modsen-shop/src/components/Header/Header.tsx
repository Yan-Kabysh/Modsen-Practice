import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Switch from 'react-switch';

import {
  ButtonCart,
  Count,
  HeaderWrapper,
  HOPPE,
  StyledCartIcon,
  StyledHeaderButtonsBlock,
  StyledHeaderButtonsBlockMedia,
  StyledIcon,
  StyledLogo,
  StyledSearchIcon,
  StyledShopButton,
} from '@/components/Header/StyledHeader';
import { ROUTES } from '@/constants/Path';
import THEME_TYPES from '@/constants/ThemeTypes';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { uiSlice } from '@/store/reducers/UIReducer/UISlice';

import { Menu } from '../Menu/Menu';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import { userFetchingSuccess } from '@/store/reducers/UserReducer/UserSlice';
import { IProduct } from '@/../types/types';
import { setCart } from '@/store/reducers/CartReducer/CartReducer';
import { getUserCart } from '../../firebaseControl/cartControl';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.uiReducer);
  const products = useAppSelector((state) => state.cartReducer.items);
  const [items, setItems] = useState(products);
  useEffect(() => {
    setItems(products);
  }, [products]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate(ROUTES.LOGIN);
    } else {
      onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          console.log('currentUser', currentUser);
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
        }
      });
    }
  }, [auth, dispatch, navigate]);

  const handleLogoClick = () => {
    navigate(ROUTES.HOME);
  };

  const handleShopButtonClick = () => {
    navigate(ROUTES.SHOP);
  };

  const handleCartButtonClick = () => {
    if (!localStorage.getItem('token')) {
      navigate(ROUTES.LOGIN);
    } else {
      navigate(ROUTES.CART);
    }
  };

  const handleThemeChange = () => {
    dispatch(uiSlice.actions.toggleTheme());
  };

  return (
    <HeaderWrapper>
      <StyledLogo onClick={handleLogoClick}>
        Modsen S<HOPPE>HOPPE</HOPPE>{' '}
      </StyledLogo>
      <StyledHeaderButtonsBlock>
        <StyledShopButton onClick={handleShopButtonClick}>
          Shop
        </StyledShopButton>
        <Switch
          onChange={handleThemeChange}
          checked={currentTheme.title === THEME_TYPES.DARK}
          checkedIcon={false}
          uncheckedIcon={false}
          width={45}
          height={21}
          handleDiameter={19}
          offColor="#D8D8D8"
          onColor="#707070"
        />
        <StyledSearchIcon />
        <ButtonCart onClick={handleCartButtonClick}>
          <StyledCartIcon></StyledCartIcon>
          {items.length !== 0 && <Count>{items.length}</Count>}
        </ButtonCart>
      </StyledHeaderButtonsBlock>
      <StyledHeaderButtonsBlockMedia>
        <ButtonCart onClick={handleCartButtonClick}>
          <StyledCartIcon></StyledCartIcon>
          {items.length !== 0 && <Count>{items.length}</Count>}
        </ButtonCart>
      </StyledHeaderButtonsBlockMedia>
      <Menu />
    </HeaderWrapper>
  );
};

export { Header };
