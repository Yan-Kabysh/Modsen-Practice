import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { ExtendedUser } from '@/../types/types';
import { Button } from '@/components/Button/Button';
import { StyledInput } from '@/components/Input/StyledInput';
import { ROUTES } from '@/constants/Path';
import { useAppDispatch } from '@/hooks/redux';
import { userFetchingSuccess } from '@/store/reducers/UserReducer/UserSlice';

import { H1 } from '../Error/StyledError';
import { Form, Span, StyledNavLink, Wrapper } from '../Login/StyledLogin';
import { EMAIL_REGEX } from '@/constants/Regular';

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
  const navigate = useNavigate();
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
        localStorage.setItem('token', user.accessToken);
        navigate(ROUTES.HOME);
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
                value: EMAIL_REGEX,
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
          <StyledNavLink to={ROUTES.LOGIN}>Login</StyledNavLink>
        </Span>
        <Button type="submit">Register</Button>
      </Form>
    </Wrapper>
  );
};

export { Register };
