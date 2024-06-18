import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { TextArea } from '@/components/TextArea/Textarea';
import { H1 } from '../Shop/StyledShop';
import { ButtonDiv, InputsDiv, Span, Wrapper } from './StyledContactUs';
import { StyledInput } from '@/components/Input/StyledInput';
import { StyledTextArea } from '@/components/TextArea/StyledTextArea';

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
    emailjs
      .send(
        'service_9lhh6nk', // Ваш ID сервиса emailjs
        'template_265lc4i', // Ваш ID шаблона emailjs
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        'LDLNleshsehnRHFNt' // Ваш пользовательский ID emailjs
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
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
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
