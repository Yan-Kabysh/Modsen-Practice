import React, { useMemo } from 'react';

import { ReactComponent as StarIcon } from '@/images/star.svg';

import { Wrapper } from './StyledStarrating';

type StarRatingPropsType = {
  value: number;
};

const StarRating = ({ value }: StarRatingPropsType) => {
  const roundedValue = useMemo(() => Math.round(value), [value]);

  return (
    <Wrapper>
      <StarIcon fill={roundedValue >= 1 ? '#A18A68' : 'black'} />
      <StarIcon fill={roundedValue >= 2 ? '#A18A68' : 'black'} />
      <StarIcon fill={roundedValue >= 3 ? '#A18A68' : 'black'} />
      <StarIcon fill={roundedValue >= 4 ? '#A18A68' : 'black'} />
      <StarIcon fill={roundedValue === 5 ? '#A18A68' : 'black'} />
    </Wrapper>
  );
};

export { StarRating };
