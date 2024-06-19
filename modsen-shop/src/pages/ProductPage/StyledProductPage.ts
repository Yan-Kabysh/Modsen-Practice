import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 100px;
`;

const ImageContainer = styled.div`
  display: flex;
`;

const SmallImages = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  justify-content: space-between;
`;

const SmallImg = styled.img`
  width: 80px;
  height: 80px;
  cursor: pointer;
`;

const SelectedImg = styled.img`
  width: 400px;
  height: 400px;
`;

const H2 = styled.h2`
  font-family: 'DM Sans';
  font-size: 26px;
  font-weight: 400;
  line-height: 35px;
  text-align: left;
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

const Desc = styled.p`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  text-align: left;
  color: #707070;
`;

const Icons = styled.div`
  display: flex;
  gap: 25px;
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
`;

const Rating = styled.div`
  display: flex;
  gap: 20px;
`;

const DescDiv = styled.div`
  width: 100%;
`;

const DescDivTitle = styled.div`
  width: 100%;
  border-bottom: 1px solid #d8d8d8;
  margin-bottom: 30px;
`;

const TitleSpan = styled.div`
  width: 7%;
  padding-bottom: 30px;
  border-bottom: 1px solid #000000;
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  text-align: left;
`;

const Similar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export {
  ImageContainer,
  SmallImages,
  SmallImg,
  SelectedImg,
  Wrapper,
  H2,
  ProductWrapper,
  Desc,
  Icons,
  Info,
  Categories,
  Category,
  Rating,
  DescDiv,
  DescDivTitle,
  TitleSpan,
  Similar,
};
