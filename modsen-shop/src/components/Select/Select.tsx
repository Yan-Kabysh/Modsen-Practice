import { SelectProps } from '@/types';
import React, { useState } from 'react';
import { Arrow, SelectBox, Wrapper } from './styledSelect';

const Select: React.FC<SelectProps> = ({ label, options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState('');

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
        {options.map((option) => (
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
