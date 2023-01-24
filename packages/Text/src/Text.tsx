import * as React from 'react';
import {
  styled,
  ColorsInterface,
  TextFontWeight,
  FontWeight,
  FontTypeVariants,
  MarginProps,
  marginsCss,
} from '@lerna-demo/theme';

export interface TextProps {
  fontConfig?: {
    fontSize?: FontTypeVariants;
    weight?: FontWeight | TextFontWeight;
    uppercase?: boolean;
    ellipsis?: boolean;
    capitalize?: boolean;
    wordBreak?: boolean;
    italic?: boolean;
    underline?: boolean;
    lineThrough?: boolean;
    whiteSpaceWrap?: boolean;
    fontColor?: keyof ColorsInterface;
  };
  children: any;
  onClick?: (event: React.MouseEvent) => void;
  className?: string;
}

export const StyledText = styled.span<TextProps & MarginProps>`
  ${marginsCss}
  color: ${props =>
    props.theme.colors[props.fontConfig?.fontColor ? props.fontConfig?.fontColor.toString() : 'anthracite']};
  ${props => props.fontConfig?.capitalize && `text-transform: capitalize`};
  ${props => props.fontConfig?.uppercase && `text-transform: uppercase`};
  ${props => props.fontConfig?.whiteSpaceWrap && `white-space: nowrap`};
  ${props => props.fontConfig?.italic && `font-style: italic`};
  ${props => props.fontConfig?.underline && `text-decoration: underline`};

  /* OJO! Solo funciona con un max-width fijo en el padre */
  ${props => props.fontConfig?.ellipsis && `white-space: nowrap;overflow: hidden;text-overflow: ellipsis`};
  ${props => props.fontConfig?.lineThrough && `text-decoration: line-through`};
  ${props => props.fontConfig?.wordBreak && `word-break: break-word`};
  ${props =>
    props.theme.font[props.fontConfig?.fontSize ?? 'size16'](
      props.fontConfig?.weight || props.theme.fontWeight.REGULAR,
    )}
`;

export const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};
