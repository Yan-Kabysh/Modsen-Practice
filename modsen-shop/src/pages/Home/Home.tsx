import CustomSwiper from '@/components/CustomSwaiper/CustomSwiper';
import { Products } from '@/components/Products/Products';
import { ROUTES } from '@/constants/Path';

import { H1, Ref, Title, Wrapper } from './StyledHome';

const Home = () => {
  return (
    <>
      <CustomSwiper />
      <Wrapper>
        <Title>
          <H1>Shop The Latest</H1>
          <Ref href={ROUTES.SHOP}>View All</Ref>
        </Title>
        <Products count={6} />
      </Wrapper>
    </>
  );
};

export { Home };
