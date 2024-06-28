import { breakpoints } from '@/constants/Breakpoints';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  width: 40%;
  padding: 20px;
  border-radius: 20px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.colors.text};
  @media screen and (max-width: ${breakpoints.medium}) {
    width: 100%;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: bold;
  }
`;

const Span = styled.span`
  font-family: 'DM Sans';
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: #707070;
  text-align: center;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export { Form, Span, StyledNavLink, Wrapper };
