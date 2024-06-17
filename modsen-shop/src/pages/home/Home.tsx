import { Products } from '@/components/Products/Products';
import { Wrapper } from './StyledHome';

const Home = () => {
  return (
    <Wrapper>
      <div className="title">
        <h1 className="h1">Shop The Latest</h1>
        <a href="" className="a">
          View All
        </a>
      </div>
      <Products count={6} />
    </Wrapper>
  );
};

export { Home };
