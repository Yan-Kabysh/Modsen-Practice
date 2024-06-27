import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Switch from 'react-switch';

import { IProduct } from '@/../types/types';
import * as S from '@/components/Header/StyledHeader';
import { Menu } from '@/components/Menu/Menu';
import { ROUTES } from '@/constants/Path';
import THEME_TYPES from '@/constants/ThemeTypes';
import { auth } from '@/firebase';
import { getUserCart } from '@/helpers/cartControl';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setCart } from '@/store/reducers/CartReducer/CartReducer';
import { uiSlice } from '@/store/reducers/UIReducer/UISlice';
import { userFetchingSuccess } from '@/store/reducers/UserReducer/UserSlice';

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
    <S.HeaderWrapper>
      <S.StyledLogo onClick={handleLogoClick}>
        Modsen S<S.HOPPE>HOPPE</S.HOPPE>{' '}
      </S.StyledLogo>
      <S.StyledHeaderButtonsBlock>
        <S.StyledShopButton onClick={handleShopButtonClick}>
          Shop
        </S.StyledShopButton>
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
        <S.StyledSearchIcon />
        <S.ButtonCart onClick={handleCartButtonClick}>
          <S.StyledCartIcon />
          {items.length !== 0 && <S.Count>{items.length}</S.Count>}
        </S.ButtonCart>
      </S.StyledHeaderButtonsBlock>
      <S.StyledHeaderButtonsBlockMedia>
        <S.ButtonCart onClick={handleCartButtonClick}>
          <S.StyledCartIcon></S.StyledCartIcon>
          {items.length !== 0 && <S.Count>{items.length}</S.Count>}
        </S.ButtonCart>
      </S.StyledHeaderButtonsBlockMedia>
      <Menu />
    </S.HeaderWrapper>
  );
};

export { Header };
