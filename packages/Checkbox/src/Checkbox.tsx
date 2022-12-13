import { ChangeEvent } from 'react';

export type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (ev: ChangeEvent) => void;
};

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <label>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
};
