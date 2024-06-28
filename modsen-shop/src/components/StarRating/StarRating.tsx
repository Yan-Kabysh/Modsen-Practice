import React, { useMemo } from 'react';

import { ReactComponent as StarIcon } from '@/images/star.svg';

import { Wrapper } from './StyledStarrating';
import { useAppSelector } from '@/hooks/redux';

type StarRatingPropsType = {
  value: number;
};

const StarRating = ({ value }: StarRatingPropsType) => {
  const roundedValue = useMemo(() => Math.round(value), [value]);
  const accent = useAppSelector(
    (state) => state.uiReducer.currentTheme.colors.accent
  );
  const black = useAppSelector(
    (state) => state.uiReducer.currentTheme.colors.black
  );

  return (
    <Wrapper>
      <StarIcon fill={roundedValue >= 1 ? accent : black} />
      <StarIcon fill={roundedValue >= 2 ? accent : black} />
      <StarIcon fill={roundedValue >= 3 ? accent : black} />
      <StarIcon fill={roundedValue >= 4 ? accent : black} />
      <StarIcon fill={roundedValue === 5 ? accent : black} />
    </Wrapper>
  );
};

export { StarRating };
