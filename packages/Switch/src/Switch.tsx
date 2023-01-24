import * as React from 'react';
import { SwitchWrapper, InputSwitch, StyledSwitch } from './Switch.styles';

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick?: () => void;
  className?: string;
  label?: string;
  isTitle?: boolean;
  dataTestId?: string;
  dataTestIdSwitch?: string;
}

export const Switch = ({
  label,
  id,
  onClick,
  // isTitle,
  dataTestId,
  dataTestIdSwitch,
  className,
  disabled,
  ...props
}: SwitchProps) => {
  return (
    <SwitchWrapper disabled={disabled} htmlFor={id} className={className}>
      {label}
      <InputSwitch type="checkbox" {...{ id, disabled, ...props }} data-testid={dataTestId} />
      <StyledSwitch data-testid={dataTestIdSwitch} onClick={onClick} disabled={disabled} />
    </SwitchWrapper>
  );
};
