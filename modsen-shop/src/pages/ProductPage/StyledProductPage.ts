import '@/styles/variables.css';

import styled from 'styled-components';

import { IDescriptionProps } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';
import { ReactComponent as ArrowIcon } from '@/images/smallArrow.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.xxl};
  margin-top: ${({ theme }) => theme.xxl};
  @media screen and (max-width: ${breakpoints.medium}) {
    margin-top: ${({ theme }) => theme.s};
    gap: ${({ theme }) => theme.s};
  }
`;
const StyledArrowIcon = styled(ArrowIcon)<IDescriptionProps>`
  display: none;

  @media screen and (max-width: ${breakpoints.medium}) {
    display: block;
    transition: transform ${({ theme }) => theme.time};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const ImageContainer = styled.div`
  display: flex;
`;

const SmallImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.s};
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.medium}) {
    display: none;
  }
`;

const SmallImgWrapper = styled.div`
  overflow: hidden;
`;

const SmallImg = styled.img`
  width: ${({ theme }) => theme.xl};
  height: ${({ theme }) => theme.xl};
  cursor: pointer;
  object-fit: contain;
`;

const SelectedImg = styled.img`
  width: ${({ theme }) => theme.full};
  height: ${({ theme }) => theme.full};
  object-fit: contain;
`;

const SelectedImgWrapper = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
`;

const H2 = styled.h2`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-26);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-35);
  text-align: left;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-20);
    line-height: var(--line-height-26);
  }
`;

const Price = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-500);
  line-height: var(--line-height-26);
  color: ${({ theme }) => theme.colors.accent};
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-16);
    line-height: var(--line-height-27);
    margin: ${({ theme }) => theme.s} 0;
  }
`;

const Description = styled.span<IDescriptionProps>`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  text-align: left;
  color: ${({ theme }) => theme.colors.darkGray};
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.m};
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const Desc = styled.p`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  text-align: left;
  color: ${({ theme }) => theme.colors.darkGray};
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
    margin-bottom: ${({ theme }) => theme.s};
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 25px;
  @media screen and (max-width: ${breakpoints.medium}) {
    justify-content: space-around;
    margin: ${({ theme }) => theme.s} 0;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Categories = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.s};
`;

const Category = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
    margin-bottom: ${({ theme }) => theme.s};
  }
`;

const Rating = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.s};
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const DescDiv = styled.div`
  width: ${({ theme }) => theme.full};
`;

const DescDivTitle = styled.div`
  width: ${({ theme }) => theme.full};
  border-bottom: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.mediumPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.mediumPadding};
`;

const TitleSpan = styled.div`
  width: 7%;
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-26);
  text-align: left;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
    border-bottom: none;
  }
`;

const Similar = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.xxl};
  @media screen and (max-width: ${breakpoints.medium}) {
    gap: ${({ theme }) => theme.s};
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
