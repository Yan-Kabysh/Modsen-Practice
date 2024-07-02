import '@/styles/variables.css';

import { styled } from 'styled-components';

import { IDescriptionProps } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div`
  width: 21%;
  min-width: 21%;
  margin-right: ${({ theme }) => theme.mediumPadding};
  @media screen and (max-width: ${breakpoints.medium}) {
    width: ${({ theme }) => theme.full};
    margin-bottom: ${({ theme }) => theme.m};
  }
`;

const Filters = styled.div<IDescriptionProps>`
  @media screen and (max-width: ${breakpoints.medium}) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

export { Filters, Wrapper };
