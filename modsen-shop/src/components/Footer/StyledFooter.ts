import styled from 'styled-components';

import { breakpoints } from '@/constants/Breakpoints';

const Wrapper = styled.div`
  border-top: 1px solid #d8d8d8;
  margin: 200px 0 50px 0;
  @media screen and (max-width: ${breakpoints.medium}) {
    margin: 50px 0 30px 0;
  }
`;

const Networks = styled.div`
  display: flex;
  gap: 30px;
  order: 2;
  @media screen and (max-width: ${breakpoints.medium}) {
    order: 1;
    justify-content: space-around;
    margin-bottom: 20px;
  }
`;

const Policy = styled.span`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: #707070;
  order: 1;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    order: 2;
  }
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
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  height: 36px;
  @media screen and (max-width: ${breakpoints.medium}) {
    height: 30px;
  }
`;

const RefsEmail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
  }
`;

const Refs = styled.div`
  display: flex;
  gap: 40px;
  order: 1;
  @media screen and (max-width: ${breakpoints.medium}) {
    flex-direction: column;
    order: 2;
    gap: 10px;
    margin-top: 20px;
  }
`;

const Email = styled.div`
  order: 2;
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
    order: 1;
  }
`;

const Ref = styled.a`
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  color: #707070;
  text-decoration: none;
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
  }
`;

const Input = styled.input`
  width: 400px;
  /* width: 100%; */
  height: 40px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  font-family: 'DM Sans';
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px
      ${(props) => props.theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.background} inset;
    -webkit-text-fill-color: ${(props) => props.theme.colors.text};
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px
      ${(props) => props.theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.background} inset;
    -webkit-text-fill-color: ${(props) => props.theme.colors.text};
  }

  &:-webkit-autofill:hover,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px
      ${(props) => props.theme.colors.background} inset;
    box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.background} inset;
    -webkit-text-fill-color: ${(props) => props.theme.colors.text};
  }
  @media screen and (max-width: ${breakpoints.medium}) {
    font-size: 12px;
    width: 93%;
    height: 30px;
  }
`;

export {
  ArrowButton,
  Email,
  Input,
  Networks,
  Policy,
  PolicyNetworks,
  Ref,
  Refs,
  RefsEmail,
  Wrapper,
};
