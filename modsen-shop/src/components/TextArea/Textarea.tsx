import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import { StyledTextArea } from './StyledTextArea';

type TextAreaProps = {
  placeholder: string;
  name: keyof FieldValues;
  register: UseFormRegister<FieldValues>;
};

const TextArea = ({ placeholder, name, register }: TextAreaProps) => {
  return <StyledTextArea placeholder={placeholder} {...register(name)} />;
};

export { TextArea };
