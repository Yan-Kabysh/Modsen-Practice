import '@/styles/variables.css';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { IDescriptionProps, IMenuButtonProps } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';

const MenuButton = styled.button<IMenuButtonProps>`
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({ isOpen, theme }) => (isOpen ? '42px' : theme.btnHeight)};
  height: 30px;
  padding: ${({ theme }) => theme.zero};
  box-sizing: border-box;

  span {
    width: ${({ theme }) => theme.full};
    height: 3px;
    background: ${({ theme }) => theme.colors.text};
    transition:
      transform ${({ theme }) => theme.time},
      opacity ${({ theme }) => theme.time};

    &:nth-child(1) {
      transform: ${({ isOpen, theme }) =>
        isOpen ? 'rotate(45deg) translate(11px, 12px)' : `rotate(${theme.zero})`};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen, theme }) => (isOpen ? theme.zero : 1)};
    }

    &:nth-child(3) {
  transform: ${({ isOpen, theme }) =>
    isOpen ? `rotate(-45deg) translate(${theme.xxxs}, -3px)` : `rotate(${theme.zero})`};
}
  }
`;

const StyledMenu = styled.div`
  display: none;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: block;
  }
`;

const Block = styled.div`
  display: none;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: block;
  }
`;

const ThemeTitle = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-26);
`;

const MenuWrapper = styled.div<IDescriptionProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.background};
  padding: 10px;
  width: 100vw;
  height: 90vh;
  position: fixed;
  top: ${({ theme }) => theme.zero};
  right: -40px;
  z-index: 1000;
  gap: 10px;
  margin: 10vh 4% ${({ theme }) => theme.zero} 4%;
  transition: transform ${({ theme }) => theme.time} ease-in-out;
  transform: ${({ isOpen, theme }) => (isOpen ? 'translateX(0)' : `translateX(${theme.full})`)};
  overflow-y: auto;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-26);
`;

const Theme = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.s};
`;

export {
  Block,
  MenuButton,
  MenuWrapper,
  StyledMenu,
  StyledNavLink,
  Theme,
  ThemeTitle,
};
