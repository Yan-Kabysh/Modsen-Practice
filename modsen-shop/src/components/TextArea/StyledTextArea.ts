import '@/styles/variables.css';

import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const StyledTextArea = styled.textarea`
  width: ${({ theme }) => theme.full};
  height: ${({ theme }) => theme.xxl};
  background: transparent;
  border: none;
  border-bottom: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.gray};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  color: ${({ theme }) => theme.colors.black};
  outline: none;
  margin-top: ${({ theme }) => theme.bigPadding};

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    line-height: var(--line-height-20);
  }
`;

export { StyledTextArea };
