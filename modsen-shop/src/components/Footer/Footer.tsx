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

import * as S from './StyledFooter';

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
    <S.Wrapper>
      <S.RefsEmail>
        <S.Refs>
          <S.Ref href={ROUTES.CONTACT}>CONTACT</S.Ref>
          <S.Ref href="">TERMS OF SERVICES</S.Ref>
          <S.Ref href="">SHOPPING AND RETURNS</S.Ref>
        </S.Refs>
        <S.Email>
          <form onSubmit={handleSubmit(onSubmit)}>
            <S.Input
              placeholder="Give an email, get the newsletter."
              type="text"
              {...register('email', {
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'Enter the correct email',
                },
              })}
            />
            <S.ArrowButton type="submit">
              <ArrowIcon />
            </S.ArrowButton>
          </form>
          <>
            {isSubmitted && errors.email && (
              <S.ErrorMessage>{errors.email.message}</S.ErrorMessage>
            )}
          </>
        </S.Email>
      </S.RefsEmail>
      <S.PolicyNetworks>
        <S.Policy>© 2023 Shelly. Terms of use and privacy policy.</S.Policy>
        <S.Networks>
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
        </S.Networks>
      </S.PolicyNetworks>
    </S.Wrapper>
  );
};

export { Footer };
