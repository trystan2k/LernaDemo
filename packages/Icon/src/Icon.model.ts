import * as React from 'react';
import { ColorsInterface, MarginProps, SizeName } from '@lerna-demo/theme';

export type SpecificSizes = 'dimension0' | 'dimension24' | 'dimension32' | 'dimension48' | 'dimension64';

export interface ConfigInterface {
  color?: keyof ColorsInterface;
  background?: keyof ColorsInterface;
  hasBorder?: boolean;
  isDisabled?: boolean;
}

export interface IconBaseProps extends React.HTMLAttributes<HTMLSpanElement> {
  onAction?: {
    onClick: (event: React.MouseEvent<HTMLSpanElement>) => void;
    hashId: string;
  };
  className?: string;
  content: string;
}

export type IconProps = IconBaseProps &
  MarginProps & {
    size: SpecificSizes;
    config?: ConfigInterface;
  };

export type CustomizableIconProps = IconBaseProps &
  MarginProps & {
    size: SizeName;
    color?: keyof ColorsInterface;
  };
