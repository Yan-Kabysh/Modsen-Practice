import { StyledButton } from './StyledButton';

const Button = ({ children, onClick, width, height, maxWidth }: any) => {
  return (
    <StyledButton
      width={width}
      height={height}
      maxWidth={maxWidth}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export { Button };
