import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SearchIcon } from '../Icons/SearchIcon';
import { IconWrapper, Input, Wrapper } from './StyledSearchInput';

const SearchInput = ({ onSearch }: any) => {
  const { register, watch } = useForm();
  const searchTerm = watch('searchTerm', '');

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <Wrapper>
      <Input type="text" placeholder="Search..." {...register('searchTerm')} />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export { SearchInput };
