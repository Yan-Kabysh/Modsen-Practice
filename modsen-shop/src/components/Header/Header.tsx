import { SearchIcon } from '@/components/Icons/SearchIcon';
import { CartIcon } from '@/components/Icons/CartIcon';
import {
  HeaderWrapper,
  StyledLogo,
  StyledShopButton,
  StyledIcon,
  StyledHeaderButtonsBlock,
} from '@/components/Header/styledHeader';
import Switch from 'react-switch';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { uiSlice } from '@/store/reducers/UIReducer/UISlice';
import { THEME_TYPES } from '../../types';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate('/shop');
  };
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.uiReducer);

  const handleThemeChange = () => {
    dispatch(uiSlice.actions.toggleTheme());
  };
  return (
    <HeaderWrapper>
      <StyledLogo>Modsen SHOPPE </StyledLogo>
      <StyledHeaderButtonsBlock>
        <StyledShopButton onClick={clickHandler}>Shop</StyledShopButton>
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
        <StyledIcon>
          <SearchIcon />
        </StyledIcon>
        <StyledIcon>
          <CartIcon />
        </StyledIcon>
      </StyledHeaderButtonsBlock>
    </HeaderWrapper>
  );
};

export { Header };
