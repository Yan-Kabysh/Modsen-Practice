import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Switch from 'react-switch';

import * as S from '@/components/Header/StyledHeader';
import { Menu } from '@/components/Menu/Menu';
import { ROUTES } from '@/constants/Path';
import THEME_TYPES from '@/constants/ThemeTypes';
import { auth } from '@/firebase';
import { useAuthCheck } from '@/helpers/authHelpers';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { uiSlice } from '@/store/reducers/UIReducer/UISlice';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.uiReducer);
  const products = useAppSelector((state) => state.cartReducer.items);
  const theme = useAppSelector((state) => state.uiReducer.currentTheme);
  const [items, setItems] = useState(products);

  useEffect(() => {
    setItems(products);
  }, [products]);

  useAuthCheck(auth);

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
        <S.StyledShopButton
          isActive={window.location.pathname.includes('shop')}
          onClick={handleShopButtonClick}
        >
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
          offColor={theme.colors.gray}
          onColor={theme.colors.lightGray}
        />
        <S.StyledSearchIcon />
        <S.ButtonCart
          isActive={window.location.pathname.includes('cart')}
          onClick={handleCartButtonClick}
        >
          <S.StyledCartIcon />
          {items.length !== 0 && <S.Count>{items.length}</S.Count>}
        </S.ButtonCart>
      </S.StyledHeaderButtonsBlock>
      <S.StyledHeaderButtonsBlockMedia>
        <S.ButtonCart
          isActive={window.location.pathname.includes('cart')}
          onClick={handleCartButtonClick}
        >
          <S.StyledCartIcon></S.StyledCartIcon>
          {items.length !== 0 && <S.Count>{items.length}</S.Count>}
        </S.ButtonCart>
      </S.StyledHeaderButtonsBlockMedia>
      <Menu />
    </S.HeaderWrapper>
  );
};

export { Header };
