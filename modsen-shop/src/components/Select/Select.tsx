import React, { useEffect, useState } from 'react';

import { SelectProps } from '@/../types/types';

import { Arrow, SelectBox, Wrapper } from './StyledSelect';

const Select: React.FC<SelectProps> = ({ label, options, onChange, reset }) => {
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption('');
  }, [reset]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <Wrapper>
      <SelectBox value={selectedOption} onChange={handleChange}>
        {selectedOption === '' && (
          <option value="" disabled>
            {label}
          </option>
        )}
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectBox>
      <Arrow />
    </Wrapper>
  );
};

export { Select };
