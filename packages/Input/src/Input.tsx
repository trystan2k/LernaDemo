import { ChangeEvent, FormEvent } from 'react';

export interface InputProps {
  label: string;
  type?: string;
  value?: string;
  onInput?: (ev: FormEvent) => void;
  onChange?: (ev: ChangeEvent) => void;
  onBlur?: (ev: FormEvent) => void;
  onFocus?: (ev: FormEvent) => void;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <>
      <label>
        <div>{label}</div>
        <input {...props} />
      </label>
    </>
  );
};
