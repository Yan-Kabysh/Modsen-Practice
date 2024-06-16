import { StyledButton } from './StyledButton';

const Button = ({ children, onClick }: any) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { Button };
