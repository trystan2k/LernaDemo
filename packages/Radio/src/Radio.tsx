import { ChangeEvent } from 'react';

export interface RadioProps {
  label: string;
  id?: string;
  checked?: boolean;
  onChange?: (ev: ChangeEvent) => void;
}

export const Radio = ({ label, id, ...props }: RadioProps) => {
  return (
    <label>
      <span>{label}</span>
      <input id={id} type="radio" {...props} />
    </label>
  );
};
