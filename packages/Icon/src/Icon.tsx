import * as React from 'react';
import { rem } from 'polished';
import { CustomizableIconProps, IconBaseProps, IconProps } from './Icon.model';
import { styled, marginsCss } from '@lerna-demo/theme';

export const IconDailyBanking: React.FC<IconBaseProps> = ({
  onMouseEnter,
  onMouseLeave,
  className,
  onAction,
  content,
}) => {
  const innerHtml = { __html: content };

  // icons cannot be focusables, or we cannot use tabulation to move between input fields
  if (innerHtml.__html) {
    innerHtml.__html = innerHtml.__html.replace('<svg ', '<svg focusable="false" ');
  }

  return (
    <span
      className={className}
      onClick={onAction?.onClick}
      dangerouslySetInnerHTML={innerHtml}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
};

export const StyledIcon = styled(IconDailyBanking)<IconProps>(
  ({ theme }) => `{
  ${marginsCss};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  width: ${(p: { size: string | number }) => rem(theme.sizes[p.size])};
  height: ${(p: { size: string | number }) => rem(theme.sizes[p.size])};

  ${(p: { config: { background: string | number } }) =>
    p.config?.background && `background-color: ${theme.colors[p.config?.background]}`};

  ${(p: { size: string; config: { background: any } }) =>
    p.size === 'dimension32' && `background-color: ${theme.colors[p.config?.background || 'white']}`};

  ${(p: { size: string; config: { background: any } }) =>
    p.size === 'dimension48' && `background-color: ${theme.colors[p.config?.background || 'gray1Background']}`};

  ${(p: { config: { hasBorder: any } }) => p.config?.hasBorder && `border: 1px solid ${theme.colors.gray1Border}`};

  > svg {
    ${(p: { size: string }) =>
      p.size === 'dimension24' &&
      `
        width: 66.7%;
        height: 66.7%;
      `};

    ${(p: { config: { isDisabled: any } }) => p.config?.isDisabled && `fill-opacity: 0.5;`};

    ${(p: { config: { color: string | number } }) =>
      p.config?.color &&
      `
        path {
          fill: ${theme.colors[p.config.color]};
        }
      `};
  }
`,
);

export const Icon = ({ ...props }: IconProps) => {
  return <StyledIcon {...props} />;
};

export const CustomizableIcon = styled(IconDailyBanking)<CustomizableIconProps>(
  ({ theme }) => `
  ${marginsCss};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: ${(p: { size: string | number }) => rem(theme.sizes[p.size])};
  height: ${(p: { size: string | number }) => rem(theme.sizes[p.size])};

  > svg {
    width: 100%;
    height: 100%;

    ${(p: { color: string | number }) =>
      p.color &&
      `path { fill: ${theme.colors[p.color]};}
      `};
  }
`,
);
