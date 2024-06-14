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
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import { useContext } from 'react';

interface Props {
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const asd = useContext(ThemeContext);
  return (
    <HeaderWrapper>
      <StyledLogo>Modsen SHOPPE </StyledLogo>
      <StyledHeaderButtonsBlock>
        <StyledShopButton>Shop</StyledShopButton>
        <Switch
          onChange={toggleTheme}
          checked={asd?.title === 'dark'}
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
