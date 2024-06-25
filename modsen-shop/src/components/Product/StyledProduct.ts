import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';
interface WrapperProps {
  width?: string;
}

interface ImageWrapperProps {
  height?: string;
}
const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  } */
`;

const Title = styled.span`
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 14px;
    line-height: 22px;
    -webkit-line-clamp: 2;
  }
`;

const Price = styled.span`
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: #a18a68;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    line-height: 20px;
  }
`;

const StyledNavLink = styled(NavLink)`
  width: 30%;
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 40%;
  }
`;

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: ${({ height }) => height || '380px'};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 180px;
  }
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export { ImageWrapper, Img, Price, StyledNavLink, Title, Wrapper };
