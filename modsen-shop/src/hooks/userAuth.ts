import { useAppSelector } from './redux';

export const userAuth = () => {
  const { email, token, id } = useAppSelector(
    (state) => state.userReducer.user
  );

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
