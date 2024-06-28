import { styled } from 'styled-components';

import { IDescriptionProps } from '@/../types/types';
import { breakpoints } from '@/constants/Breakpoints';
import '@/styles/variables.css'


const Wrapper = styled.div`
  width: 21%;
  min-width: 21%;
  margin-right: 30px;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

const Filters = styled.div<IDescriptionProps>`
  @media screen and (max-width: ${breakpoints.medium}) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  }
`;

export { Filters, Wrapper };
