import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button/Button';
import { ROUTES } from '@/constants/Path';

import { H1, Span, Wrapper } from './StyledError';

const Error = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <>
      <Wrapper>
        <H1>404 ERROR</H1>
        <Span>This page not found;{<br />} back to home and start again</Span>
        <Button onClick={clickHandler}>HOMEPAGE</Button>
      </Wrapper>
    </>
  );
};

export { Error };
