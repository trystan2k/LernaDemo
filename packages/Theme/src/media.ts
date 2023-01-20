import { css, FlattenSimpleInterpolation } from '../index';
import { breakpoints } from './breakpoints';

export type Breakpoint = (strings: TemplateStringsArray, ...args: any) => FlattenSimpleInterpolation;

export interface MediaInterface {
  onlyMobile: Breakpoint;
  desktop: Breakpoint;
}

export const media: MediaInterface = {
  onlyMobile: (strings: TemplateStringsArray, ...args) => css`
    @media (max-width: ${breakpoints.desktop - 1}px) {
      ${css(strings, ...args)};
    }
  `,
  desktop: (strings: TemplateStringsArray, ...args) => css`
    @media (min-width: ${breakpoints.desktop}px) {
      ${css(strings, ...args)};
    }
  `,
};

export const withCSSreakpoint = (breakpoint: Breakpoint) => {
  return (styles: FlattenSimpleInterpolation) => breakpoint`${styles};`;
};
