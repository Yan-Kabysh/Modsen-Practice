import '@/styles/variables.css';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 40%;
  width: 100%;
  padding: ${({ theme }) => theme.s};
  border-radius: ${({ theme }) => theme.s};
  margin-top: ${({ theme }) => theme.cartItemSize};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.m};
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.text};
  @media screen and (max-width: ${breakpoints.medium}) {
    max-width: ${({ theme }) => theme.full};
    width: ${({ theme }) => theme.full};
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  transition: color ${({ theme }) => theme.time} ease;
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Span = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-26);
  color: ${({ theme }) => theme.colors.darkGray};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.bigDots};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.m};
`;

export { Form, Span, StyledNavLink, Wrapper };
