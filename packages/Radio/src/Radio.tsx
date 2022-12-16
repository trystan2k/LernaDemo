import { ChangeEvent } from 'react';

export interface RadioProps {
  label: string;
  checked?: boolean;
  onChange?: (ev: ChangeEvent) => void;
}

export const Radio = ({ label, ...props }: RadioProps) => {
  return (
    <label>
      <span style={{ marginRight: '8px' }}>{label}</span>
      <input type="radio" {...props} />
    </label>
  );
};
