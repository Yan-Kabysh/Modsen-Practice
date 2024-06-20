import styled from 'styled-components';

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
`;

const StyledShopButton = styled.button`
  //styleName: 16px - Heading 5;
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
`;

const ButtonCart = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

export {
  HeaderWrapper,
  StyledLogo,
  StyledShopButton,
  StyledIcon,
  StyledHeaderButtonsBlock,
  ButtonCart,
};
