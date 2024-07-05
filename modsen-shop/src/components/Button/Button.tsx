import { ButtonProps } from '@/../types/types';
import { StyledButton } from './StyledButton';

const Button = ({
  children,
  onClick,
  width,
  height,
  maxWidth,
}: ButtonProps) => {
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
