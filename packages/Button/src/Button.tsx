export type ButtonProps = {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button = ({ label, type = 'button', ...props }: ButtonProps) => {
  return (
    <button type={type} {...props}>
      = {label} =
    </button>
  );
};
