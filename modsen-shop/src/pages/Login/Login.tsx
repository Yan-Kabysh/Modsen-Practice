import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button/Button';
import { ErrorMessage } from '@/components/Footer/StyledFooter';
import { StyledInput } from '@/components/Input/StyledInput';
import { ROUTES } from '@/constants/Path';
import { EMAIL_REGEX } from '@/constants/Regular';
import { handleLogin } from '@/helpers/authHelpers';
import { useAppDispatch } from '@/hooks/redux';
import { H1 } from '@/pages/Error/StyledError';

import { Form, Span, StyledNavLink, Wrapper } from './StyledLogin';

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
  const [error, setError] = useState<string>('');

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const errorMessage = await handleLogin(dispatch, data, navigate);
    if (errorMessage) {
      setError('Invalid email or password');
    }
  };

  return (
    <Wrapper>
      <H1>Login</H1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <StyledInput
            data-testid="email"
            {...register('email', {
              required: 'Required field.',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Invalid email address',
              },
            })}
            width="90%"
            placeholder="E-mail"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div>
          <StyledInput
            data-testid="password"
            {...register('password', {
              required: 'Required field.',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
            width="90%"
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Span>
          {"Don't have an account? "}
          <StyledNavLink to={ROUTES.REGISTER}>Register</StyledNavLink>
        </Span>
        <Button data-testid="login" type="submit">
          Login
        </Button>
      </Form>
    </Wrapper>
  );
};

export { Login };
