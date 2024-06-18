import React from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { StyledInput } from './StyledInput';

type InputProps = {
  placeholder: string;
  name: keyof FieldValues;
  register: ReturnType<UseFormRegister<FieldValues>>;
};

const Input = () => {
  return <StyledInput />;
};

export { Input };
