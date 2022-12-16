import { ChangeEvent } from 'react';

export type RangeProps = {
  label: string;
  value?: string;
  onChange?: (ev: ChangeEvent) => void;
};

export const Range = ({ label, ...props }: RangeProps) => {
  return (
    <label>
      <div>{label}</div>
      <input type="range" {...props} />
    </label>
  );
};
