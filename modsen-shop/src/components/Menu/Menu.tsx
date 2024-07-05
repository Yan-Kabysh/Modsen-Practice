import React, { useEffect, useState } from 'react';
import Switch from 'react-switch';

import { ROUTES } from '@/constants/Path';
import THEME_TYPES from '@/constants/ThemeTypes';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { uiSlice } from '@/store/reducers/UIReducer/UISlice';

import {
  Block,
  MenuButton,
  MenuWrapper,
  StyledMenu,
  StyledNavLink,
  Theme,
  ThemeTitle,
} from './StyledMenu';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();
  const { currentTheme } = useAppSelector((state) => state.uiReducer);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useBodyScrollLock(isOpen);

  const handleThemeChange = () => {
    dispatch(uiSlice.actions.toggleTheme());
  };

  return (
    <Block>
      <MenuButton onClick={toggleMenu} isOpen={isOpen}>
        <span></span>
        <span></span>
        <span></span>
      </MenuButton>
      {
        <StyledMenu>
          <MenuWrapper isOpen={isOpen}>
            <StyledNavLink to={ROUTES.HOME} onClick={toggleMenu}>
              Home
            </StyledNavLink>
            <StyledNavLink to={ROUTES.SHOP} onClick={toggleMenu}>
              Shop
            </StyledNavLink>
            <StyledNavLink to={ROUTES.CONTACT} onClick={toggleMenu}>
              Contact
            </StyledNavLink>
            <Theme>
              <ThemeTitle>Theme</ThemeTitle>
              <Switch
                onChange={handleThemeChange}
                checked={currentTheme.title === THEME_TYPES.DARK}
                checkedIcon={false}
                uncheckedIcon={false}
                width={45}
                height={21}
                handleDiameter={19}
                offColor={currentTheme.colors.gray}
                onColor={currentTheme.colors.darkGray}
              />
            </Theme>
          </MenuWrapper>
        </StyledMenu>
      }
    </Block>
  );
};

export { Menu };
