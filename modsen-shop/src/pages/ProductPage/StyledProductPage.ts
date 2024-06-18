import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
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
  width: 120px;
  height: 120px;
  cursor: pointer;
`;

const SelectedImg = styled.img`
  width: 500px;
  height: 500px;
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
};
