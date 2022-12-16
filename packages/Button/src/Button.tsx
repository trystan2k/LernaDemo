export type ButtonProps = {
  label: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};

export const Button = ({ label, type = 'button', ...props }: ButtonProps) => {
  return (
    <button style={{ padding: '4px 24px' }} type={type} {...props}>
      {label}
    </button>
  );
};
