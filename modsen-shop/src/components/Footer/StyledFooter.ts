import '@/styles/variables.css';

import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div`
  border-top: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.gray};
  margin: 200px 0 ${({ theme }) => theme.bigPadding} 0;
  @media screen and (max-width: ${breakpoints.medium}) {
    margin: ${({ theme }) => theme.bigPadding} 0
      ${({ theme }) => theme.mediumPadding} 0;
  }
`;

const Networks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.mediumPadding};
  order: 2;
  @media screen and (max-width: ${breakpoints.medium}) {
    order: 1;
    justify-content: space-around;
    margin-bottom: ${({ theme }) => theme.s};
  }
`;

const Policy = styled.span`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  color: ${({ theme }) => theme.colors.darkGray};
  order: 1;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    order: 2;
  }
`;

const Form = styled.form`
  width: ${({ theme }) => theme.full};
  display: flex;
  align-items: flex-end;
`;

const PolicyNetworks = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  border-bottom: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.text};
  height: ${({ theme }) => theme.m};
  display: flex;
  align-items: center;
  @media screen and (max-width: ${breakpoints.medium}) {
    height: ${({ theme }) => theme.mediumPadding};
  }
`;

const RefsEmail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.bigPadding} 0;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const Refs = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.m};
  order: 1;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    order: 2;
    gap: ${({ theme }) => theme.bigDots};
    margin-top: ${({ theme }) => theme.s};
  }
`;

const Email = styled.div`
  display: flex;
  align-items: flex-end;
  order: 2;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: ${({ theme }) => theme.full};
    order: 1;
  }
`;

const Ref = styled.a`
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  color: ${({ theme }) => theme.colors.darkGray};
  text-decoration: none;
  transition: color ${({ theme }) => theme.time} ease;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Input = styled.input`
  width: 400px;
  height: ${({ theme }) => theme.m}; 
  border: none;
  border-bottom: ${({ theme }) => theme.borderSmall} solid
    ${({ theme }) => theme.colors.text};
  font-family: var(--font-family-dm-sans);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-27);
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.background}
      inset;
    box-shadow: 0 0 0 1000px ${({ theme }) => theme.colors.background} inset;
    -webkit-text-fill-color: ${({ theme }) => theme.colors.text};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: var(--font-size-12);
    width: 93%;
    height: ${({ theme }) => theme.mediumPadding};
  }
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-400);
  line-height: var(--line-height-10);
  font-family: var(--font-family-dm-sans);
  margin-top: ${({ theme }) => theme.bigDots};
`;

export {
  ArrowButton,
  Email,
  ErrorMessage,
  Form,
  Input,
  Networks,
  Policy,
  PolicyNetworks,
  Ref,
  Refs,
  RefsEmail,
  Wrapper,
};
