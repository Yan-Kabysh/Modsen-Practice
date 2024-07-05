import '@/styles/variables.css';

import { styled } from 'styled-components';

import { IDescriptionProps } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div`
  min-width: 21%;
  max-width: 21%;
  width: 100%;
  margin-right: ${({ theme }) => theme.mediumPadding};
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: ${({ theme }) => theme.full};
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
