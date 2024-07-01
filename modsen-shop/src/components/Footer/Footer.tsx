import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ROUTES } from '@/constants/Path';
import { EMAIL_REGEX } from '@/constants/Regular';
import { SocialRefs } from '@/constants/SocialRefs';
import { submit } from '@/helpers/emailhelpers';
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

  const onSubmit: SubmitHandler<IEmailForm> = (data) => {
    submit(data, reset);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              placeholder="Give an email, get the newsletter."
              type="text"
              {...register('email', {
                pattern: {
                  value: EMAIL_REGEX,
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
          <a
            href={SocialRefs.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkIcon />
          </a>
          <a
            href={SocialRefs.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href={SocialRefs.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href={SocialRefs.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </a>
        </Networks>
      </PolicyNetworks>
    </Wrapper>
  );
};

export { Footer };
