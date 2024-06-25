import styled from 'styled-components';

import { IDescriptionProps } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';
import { ReactComponent as ArrowIcon } from '@/images/smallArrow.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 100px;
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: 20px;
    gap: 20px;
  }
`;
const StyledArrowIcon = styled(ArrowIcon)<IDescriptionProps>`
  display: none;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: block;
    transition: transform 0.3s;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const ImageContainer = styled.div`
  display: flex;
`;

const SmallImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const SmallImgWrapper = styled.div`
  overflow: hidden;
`;

const SmallImg = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
  object-fit: contain;
`;

const SelectedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SelectedImgWrapper = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
`;

const H2 = styled.h2`
  font-family: 'DM Sans';
  font-size: 26px;
  font-weight: 400;
  line-height: 35px;
  text-align: left;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 20px;
    line-height: 26px;
  }
`;

const Price = styled.span`
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
  color: #a18a68;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 16px;
    line-height: 27px;
    margin: 20px 0;
  }
`;

const Description = styled.span<IDescriptionProps>`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #707070;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    line-height: 20px;
    /* margin-bottom: 40px; */
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 40px;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const Desc = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #707070;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 25px;
  @media screen and (max-width: ${breakpoints.medium}) {
    justify-content: space-around;
    margin: 20px 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Categories = styled.div`
  display: flex;
  gap: 20px;
`;

const Category = styled.span`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 20px;
  }
`;

const Rating = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const DescDiv = styled.div`
  width: 100%;
  /* padding-bottom: 30px; */
`;

const DescDivTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 30px;
`;

const TitleSpan = styled.div`
  width: 7%;
  /* margin-bottom: 30px; */
  /* border-bottom: 1px solid #000000; */
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    line-height: 20px;
    border-bottom: none;
  }
`;

const Similar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  @media screen and (max-width: ${breakpoints.medium}) {
    gap: 20px;
  }
`;

export {
  Categories,
  Category,
  Desc,
  DescDiv,
  DescDivTitle,
  Description,
  H2,
  Icons,
  ImageContainer,
  Info,
  Price,
  ProductWrapper,
  Rating,
  SelectedImg,
  SelectedImgWrapper,
  Similar,
  SmallImages,
  SmallImg,
  SmallImgWrapper,
  StyledArrowIcon,
  TitleSpan,
  Wrapper,
};
