import emailjs from 'emailjs-com';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ROUTES } from '@/constants/Path';
import { ReactComponent as ArrowIcon } from '@/images/arrow.svg';
import { ReactComponent as FacebookIcon } from '@/images/facebook.svg';
import { ReactComponent as InstagramIcon } from '@/images/instagram.svg';
import { ReactComponent as LinkIcon } from '@/images/linkedin.svg';
import { ReactComponent as TwitterIcon } from '@/images/twiter.svg';

import {
  ArrowButton,
  Email,
  Input,
  Networks,
  Policy,
  PolicyNetworks,
  Ref,
  Refs,
  RefsEmail,
  Wrapper,
} from './StyledFooter';

interface IEmailForm {
  email: string;
}

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm<IEmailForm>({
    // mode: 'onBlur',
    defaultValues: {},
  });

  const submit: SubmitHandler<IEmailForm> = (data) => {
    emailjs
      .send(
        'service_9lhh6nk',
        'template_wrw1o9w',
        {
          to_email: data.email,
        },
        'LDLNleshsehnRHFNt'
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
      <RefsEmail>
        <Refs>
          <Ref href={ROUTES.CONTACT}>CONTACT</Ref>
          <Ref href="">TERMS OF SERVICES</Ref>
          <Ref href="">SHOPPING AND RETURNS</Ref>
        </Refs>
        <Email>
          <form onSubmit={handleSubmit(submit)}>
            <Input
              placeholder="Give an email, get the newsletter."
              type="text"
              {...register('email', {
                // required: 'Поле обязательно для заполнения',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Введите корректный email',
                },
              })}
            />
            <ArrowButton type="submit">
              <ArrowIcon />
            </ArrowButton>
          </form>
          <>{isSubmitted && errors.email && <p>{errors.email.message}</p>}</>
        </Email>
      </RefsEmail>
      <PolicyNetworks>
        <Policy>© 2023 Shelly. Terms of use and privacy policy.</Policy>
        <Networks>
          <LinkIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Networks>
      </PolicyNetworks>
    </Wrapper>
  );
};

export { Footer };
