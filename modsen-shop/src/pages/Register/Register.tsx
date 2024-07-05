import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button/Button';
import { ErrorMessage } from '@/components/Footer/StyledFooter';
import { StyledInput } from '@/components/Input/StyledInput';
import { ROUTES } from '@/constants/Path';
import { EMAIL_REGEX } from '@/constants/Regular';
import { authFormSubmit } from '@/helpers/authHelpers';
import { useAppDispatch } from '@/hooks/redux';
import { H1 } from '@/pages/Error/StyledError';
import { Form, Span, StyledNavLink, Wrapper } from '@/pages/Login/StyledLogin';

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
    authFormSubmit(data, dispatch, navigate);
  };

  return (
    <Wrapper>
      <H1>Register</H1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <StyledInput
            {...register('email', {
              required: 'Required field.',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Invalid email address',
              },
            })}
            width={'90%'}
            placeholder="E-mail"
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        </div>
        <div>
          <StyledInput
            {...register('password', {
              required: 'Required field.',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
            })}
            width={'90%'}
            type="password"
            placeholder="Password"
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
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
