import { StyledButton } from './Button.styles';

export type ButtonProps = {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button = ({ label, type = 'button', ...props }: ButtonProps) => {
  return (
    <StyledButton type={type} {...props}>
      {label}
    </StyledButton>
  );
};
