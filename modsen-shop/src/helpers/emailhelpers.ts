import emailjs from 'emailjs-com';

export const submit = (data: { email: any }, reset: () => void) => {
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

export const emailFormSubmit = (data: any, reset: () => void) => {
  emailjs
    .send(
      'service_9lhh6nk',
      'template_265lc4i',
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        subject: data.subject,
        message: data.message,
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
