import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/Button/Button';
import { ErrorMessage } from '@/components/Footer/StyledFooter';
import { StyledInput } from '@/components/Input/StyledInput';
import { StyledTextArea } from '@/components/TextArea/StyledTextArea';
import { EMAIL_REGEX } from '@/constants/Regular';
import { emailFormSubmit } from '@/helpers/emailhelpers';

import {
  ButtonDiv,
  ErrorWrapper,
  ErrorWrapperArea,
  H1,
  InputsDiv,
  Span,
  Wrapper,
} from './StyledContactUs';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    emailFormSubmit(data, reset);
  };

  return (
    <Wrapper>
      <H1>Contact US</H1>
      <Span>
        Say Hello, send us your thoughts about our products, or share{<br />}{' '}
        your ideas with our Team!
      </Span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputsDiv>
          <ErrorWrapper>
            <StyledInput
              placeholder="First name"
              type="text"
              {...register('firstName', { required: 'Required field.' })}
            />
            {errors.firstName && (
              <ErrorMessage data-testid="firstName-error">
                {errors.firstName.message}
              </ErrorMessage>
            )}
          </ErrorWrapper>
          <ErrorWrapper>
            <StyledInput
              placeholder="Last name"
              type="text"
              {...register('lastName', { required: 'Required field.' })}
            />
            {errors.lastName && (
              <ErrorMessage data-testid="lastName-error">
                {errors.lastName.message}
              </ErrorMessage>
            )}
          </ErrorWrapper>
          <ErrorWrapper>
            <StyledInput
              placeholder="Email"
              type="text"
              {...register('email', {
                required: 'Required field.',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Enter the correct email',
                },
              })}
            />
            {errors.email && (
              <ErrorMessage data-testid="email-error">
                {errors.email.message}
              </ErrorMessage>
            )}
          </ErrorWrapper>
          <ErrorWrapper>
            <StyledInput
              placeholder="Subject"
              type="text"
              {...register('subject', { required: 'Required field.' })}
            />
            {errors.subject && (
              <ErrorMessage data-testid="subject-error">
                {errors.subject.message}
              </ErrorMessage>
            )}
          </ErrorWrapper>
        </InputsDiv>
        <ErrorWrapperArea>
          <StyledTextArea
            placeholder="Message"
            {...register('message', { required: 'Required field.' })}
          />
          {errors.message && (
            <ErrorMessage data-testid="message-error">
              {errors.message.message}
            </ErrorMessage>
          )}
        </ErrorWrapperArea>

        <ButtonDiv>
          <Button maxWidth={'60%'} height={'40px'} type="submit">
            SEND
          </Button>
        </ButtonDiv>
      </form>
    </Wrapper>
  );
};

export { ContactUs };
