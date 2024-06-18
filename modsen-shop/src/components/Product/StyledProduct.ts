import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
interface WrapperProps {
  width?: string;
}

interface ImageWrapperProps {
  height?: string;
}
const Wrapper = styled.div<WrapperProps>`
  width: ${({ width }) => width || '30%'};
  display: flex;
  flex-direction: column;
  gap: 20px;

  .title {
    font-family: 'DM Sans';
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }

  .cost {
    font-family: 'DM Sans';
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    color: #a18a68;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus {
    text-decoration: none;
    color: inherit;
  }
`;

const ImageWrapper = styled.div<ImageWrapperProps>`
  width: 100%;
  height: ${({ height }) => height || '380px'};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export { Wrapper, ImageWrapper, StyledNavLink };
