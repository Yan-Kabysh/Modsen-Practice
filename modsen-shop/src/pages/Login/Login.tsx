import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/Button/Button';
import { StyledInput } from '@/components/Input/StyledInput';
import { NavLink, useNavigate } from 'react-router-dom';
import { H1 } from '../Error/StyledError';
import { Form, Span, StyledNavLink, Wrapper } from './StyledLogin';
import { useAppDispatch } from '@/hooks/redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  userFetching,
  userFetchingSuccess,
  userFetchingError,
} from '@/store/reducers/UserReducer/UserSlice';
import { ExtendedUser } from '@/types';

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
        const user = credential.user as ExtendedUser; // Приведение к расширенному типу
        console.log(user);
        // user.accessToken = credential.user.getIdToken(); // Получение токена пользователя
        dispatch(
          userFetchingSuccess({
            email: user.email!,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/home');
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
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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
          <StyledNavLink to="/register">Register</StyledNavLink>
        </Span>
        <Button type="submit">Login</Button>
      </Form>
    </Wrapper>
  );
};

export { Login };
