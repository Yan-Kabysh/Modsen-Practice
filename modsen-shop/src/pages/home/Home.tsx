import { Products } from '@/components/Products/Products';
import { CustomSwiper } from '@/components/Swiper/Swiper';
import { Wrapper } from './StyledHome';

const Home = () => {
  return (
    <>
      <CustomSwiper />
      <Wrapper>
        <div className="title">
          <h1 className="h1">Shop The Latest</h1>
          <a href="/shop" className="a">
            View All
          </a>
        </div>
        <Products count={6} />
      </Wrapper>
    </>
  );
};

export { Home };
