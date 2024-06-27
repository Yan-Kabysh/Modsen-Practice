import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';
import { ReactComponent as CartIcon } from '@/images/cart.svg';
import { ReactComponent as SearchIcon } from '@/images/search.svg';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d8d8d8;
  margin: 30px 0 20px 0;
  padding-bottom: 10px;
`;

const StyledLogo = styled.div`
  font-family: 'Allerta Stencil';
  font-size: 35px;
  font-weight: 400;
  line-height: 40.5px;
  color: #a18a68;
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 25px;
  }
`;

const StyledShopButton = styled.button`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  background: none;
  border: none;
  transition: color 0.3s ease;

  &:hover {
    color: #f00;
  }
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

const ButtonCart = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: relative;
`;

const HOPPE = styled.span`
  color: ${(props) => props.theme.colors.text};
`;

const StyledCartIcon = styled(CartIcon)`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 24px;
  height: 24px;
  fill: currentColor;
`;

const Count = styled.span`
  border: 2px solid ${(props) => props.theme.colors.text};
  border-radius: 50%;
  width: 18px;
  height: 18px;
  position: absolute;
  left: 13px;
  top: -4px;
  background: ${(props) => props.theme.colors.background};
  /* font-weight: 100 ; */
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
