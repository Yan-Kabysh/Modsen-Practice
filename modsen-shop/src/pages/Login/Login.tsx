import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ExtendedUser } from '@/../types/types';
import { Button } from '@/components/Button/Button';
import { StyledInput } from '@/components/Input/StyledInput';
import { ROUTES } from '@/constants/Path';
import { useAppDispatch } from '@/hooks/redux';
import {
  userFetching,
  userFetchingError,
  userFetchingSuccess,
} from '@/store/reducers/UserReducer/UserSlice';

import { H1 } from '../Error/StyledError';
import { Form, Span, StyledNavLink, Wrapper } from './StyledLogin';
import { EMAIL_REGEX } from '@/constants/Regular';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const auth = getAuth();
    dispatch(userFetching());
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((credential) => {
        const user = credential.user as ExtendedUser;
        console.log(user);
        dispatch(
          userFetchingSuccess({
            email: user.email!,
            id: user.uid,
            token: user.accessToken,
          })
        );
        localStorage.setItem('token', user.accessToken);
        navigate(ROUTES.HOME);
      })
      .catch((error) => {
        console.error(error);
        dispatch(userFetchingError(error.message));
      });
  };

  return (
    <Wrapper>
      <H1>Login</H1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <StyledInput
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Invalid email address',
              },
            })}
            width="90%"
            placeholder="E-mail"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <StyledInput
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
            width="90%"
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Span>
          {"Don't have an account? "}
          <StyledNavLink to={ROUTES.REGISTER}>Register</StyledNavLink>
        </Span>
        <Button type="submit">Login</Button>
      </Form>
    </Wrapper>
  );
};

export { Login };
