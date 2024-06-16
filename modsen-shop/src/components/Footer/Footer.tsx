import React from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { ArrowIcon } from '../Icons/ArrowIcon';
import { FacebookIcon } from '../Icons/Facebook';
import { InstagramIcon } from '../Icons/InstagramIcon';
import { LinkIcon } from '../Icons/LinkIcon';
import { TwitterIcon } from '../Icons/TwitterIcon';
import { Input, Wrapper } from './StyledFooter';
import emailjs from 'emailjs-com';

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
        'template_265lc4i',
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
      <div className="refs-email">
        <div className="refs">
          <a href="">CONTACT</a>
          <a href="">TERMS OF SERVICES</a>
          <a href="">SHIPPING AND RETURNS</a>
        </div>
        <div className="email">
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
            <button type="submit">
              <ArrowIcon />
            </button>
          </form>
          <div>
            {isSubmitted && errors.email && <p>{errors.email.message}</p>}
          </div>
        </div>
      </div>
      <div className="policy-networks">
        <span className="policy">
          © 2023 Shelly. Terms of use and privacy policy.
        </span>
        <div className="networks">
          <LinkIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </Wrapper>
  );
};

export { Footer };
