import { Img } from '@/components/CustomSwaiper/StyledCustomSwiper';
import blackAndWhiteImage from '@/images/black-white.jpg';
import natureImage from '@/images/nature.jpg';
import tuscanyImage from '@/images/tuscany.jpg';
export const slides = [
  <div key="slide1">
    <Img src={blackAndWhiteImage} alt="" />
  </div>,
  <div key="slide2">
    <Img src={natureImage} alt="" />
  </div>,
  <div key="slide3">
    <Img src={tuscanyImage} alt="" />
  </div>,
];
