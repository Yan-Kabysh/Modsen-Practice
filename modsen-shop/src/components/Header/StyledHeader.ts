import '@/styles/variables.css';

import styled from 'styled-components';

import { IHeaderButtons } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';
import { ReactComponent as CartIcon } from '@/images/cart.svg';
import { ReactComponent as SearchIcon } from '@/images/search.svg';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.gray};
  margin: ${({ theme }) => theme.mediumPadding} 0 ${({ theme }) => theme.s} 0;
  padding-bottom: ${({ theme }) => theme.bigDots};
`;

const StyledLogo = styled.div`
  font-family: 'Allerta Stencil';
  font-size: var(--font-size-35);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-40);
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-24);
  }
`;

const StyledShopButton = styled.button<IHeaderButtons>`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  background: none;
  border: none;
  cursor: pointer;
  border-bottom: ${({ isActive, theme }) =>
    isActive ? `${theme.xxxs} solid ${theme.colors.text}` : 'none'};
`;

const StyledIcon = styled.a``;

const StyledHeaderButtonsBlock = styled.div`
  display: flex;
  gap: 43px;
  align-items: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const StyledHeaderButtonsBlockMedia = styled.div`
  display: none;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: flex;
    align-items: center;
  }
`;

const ButtonCart = styled.button<IHeaderButtons>`
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  border-bottom: ${({ isActive, theme }) =>
    isActive ? `${theme.xxxs} solid ${theme.colors.text}` : 'none'};
`;

const HOPPE = styled.span`
  color: ${({ theme }) => theme.colors.text};
`;

const StyledCartIcon = styled(CartIcon)`
  width: ${({ theme }) => theme.iconSize};
  height: ${({ theme }) => theme.iconSize};
  fill: currentColor;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: ${({ theme }) => theme.iconSize};
  height: ${({ theme }) => theme.iconSize};
  fill: currentColor;
`;

const Count = styled.span`
  border: ${({ theme }) => theme.borderBig} solid
    ${({ theme }) => theme.colors.text};
  border-radius: ${({ theme }) => theme.half};
  width: 18px;
  height: 18px;
  position: absolute;
  left: 13px;
  top: -4px;
  background: ${({ theme }) => theme.colors.background};
`;

export {
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
};
