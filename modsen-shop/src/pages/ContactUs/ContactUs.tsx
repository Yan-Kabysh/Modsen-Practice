import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/Button/Button';
import { StyledInput } from '@/components/Input/StyledInput';
import { StyledTextArea } from '@/components/TextArea/StyledTextArea';
import { EMAIL_REGEX } from '@/constants/Regular';
import { emailFormSubmit } from '@/helpers/emailhelpers';

import { ButtonDiv, H1, InputsDiv, Span, Wrapper } from './StyledContactUs';

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
          <StyledInput
            placeholder="First name"
            type="text"
            {...register('firstName')}
          />
          {errors.firstName && <span>{errors.firstName.message}</span>}
          <StyledInput
            placeholder="Last name"
            type="text"
            {...register('lastName')}
          />
          {errors.lastName && <span>{errors.lastName.message}</span>}
          <StyledInput
            placeholder="Email"
            type="text"
            {...register('email', {
              // required: 'Поле обязательно для заполнения',
              pattern: {
                value: EMAIL_REGEX,
                message: 'Введите корректный email',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <StyledInput
            placeholder="Subject"
            type="text"
            {...register('subject')}
          />
          {errors.subject && <span>{errors.subject.message}</span>}
        </InputsDiv>
        <StyledTextArea placeholder="Message" {...register('message')} />
        {errors.message && <span>{errors.message.message}</span>}
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
