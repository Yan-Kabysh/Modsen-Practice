import { Img } from '@/components/CustomSwaiper/StyledCustomSwiper';
import blackAndWhiteImage from '@/images/black-and-white-photography-3243741_1920.jpg';
// Import images
import natureImage from '@/images/nature-3239504_1920.jpg';
import tuscanyImage from '@/images/tuscany-3364921_1920.jpg';
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
