import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/Button/Button';
import { StyledInput } from '@/components/Input/StyledInput';
import { H1 } from '../Error/StyledError';
import { Form, Span, StyledNavLink, Wrapper } from '../Login/StyledLogin';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from '@/hooks/redux';
import {
  userFetching,
  userFetchingSuccess,
} from '@/store/reducers/UserReducer/UserSlice';
import { ExtendedUser } from '@/types';

type FormValues = {
  email: string;
  password: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
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
      })
      .catch(console.error);
  };

  return (
    <Wrapper>
      <H1>Register</H1>
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
            width={'90%'}
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
            width={'90%'}
            type="password"
            placeholder="Password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <Span>
          {'Already have an account? '}
          <StyledNavLink to="/login">Login</StyledNavLink>
        </Span>
        <Button type="submit">Register</Button>
      </Form>
    </Wrapper>
  );
};

export { Register };
