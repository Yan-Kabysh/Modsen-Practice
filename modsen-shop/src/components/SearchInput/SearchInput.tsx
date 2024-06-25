import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { StyledSearchIcon } from '../Header/StyledHeader';
import { IconWrapper, Input, Wrapper } from './StyledSearchInput';

const SearchInput = ({ onSearch, resetInput }: any) => {
  const { register, watch, reset } = useForm();
  const searchTerm = watch('searchTerm', '');

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  useEffect(() => {
    reset({ searchTerm: '' });
  }, [resetInput, reset]);

  return (
    <Wrapper>
      <Input type="text" placeholder="Search..." {...register('searchTerm')} />
      <IconWrapper>
        <StyledSearchIcon />
      </IconWrapper>
    </Wrapper>
  );
};

export { SearchInput };
