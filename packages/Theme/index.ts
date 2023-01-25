import { THEME_1 } from './src/theme1';
import { THEME_2 } from './src/theme2';
import { theme } from './src/theme';
import styled, { ThemeProvider, createGlobalStyle, css, type FlattenSimpleInterpolation } from 'styled-components';

import { FOUNDATIONS } from './src/foundations';

import { breakpoints, type ThemeBreakpoints, MAX_ULTRA_WIDE_DIMEN, isDesktopOrHigher } from './src/breakpoints';
import { colors, type ColorsInterface } from './src/colors';
import {
  FontFamily,
  type TextFontWeight,
  type FontTypeVariants,
  FontWeight,
  type TypiValue,
  type FontInterface,
  font,
  generateFontSize,
} from './src/font';
import {
  type MarginProps,
  type MarginPropsDesktopAndUltraWide,
  marginsCss,
  marginsCssDesktopAndUltraWide,
} from './src/margins';
import { type Breakpoint, type MediaInterface, media, withCSSreakpoint } from './src/media';

// import { BASE_SIZE, Size, SizeName, SizesInterface, sizes } from './src/DemoBox';
import { DemoBox } from './src/DemoBox';

import { SizeName } from './lib/src/size';

type ThemeType = typeof THEME_1 & typeof THEME_2 & typeof theme;

export const GlobalStyles = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      outline:0;
      box-sizing:border-box;
      font-family: ${FOUNDATIONS.typography.fontFamily};
  }
  #root{
      margin:0 auto;
  }
`;

export { styled, ThemeProvider, css, FlattenSimpleInterpolation, THEME_1, THEME_2, theme, type ThemeType };

export { breakpoints, ThemeBreakpoints, MAX_ULTRA_WIDE_DIMEN, isDesktopOrHigher };
export { colors, ColorsInterface };
export { MarginProps, MarginPropsDesktopAndUltraWide, marginsCss, marginsCssDesktopAndUltraWide };
export { FontFamily, TextFontWeight, FontTypeVariants, FontWeight, TypiValue, FontInterface, font, generateFontSize };
export { Breakpoint, MediaInterface, media, withCSSreakpoint };
// export { BASE_SIZE, Size, SizeName, SizesInterface, sizes };
export { DemoBox };
export { type SizeName };

export * from './src/storybook-addon/constants';
export * from './src/storybook-addon/models';
export * from './src/storybook-addon/preview';
export * from './src/storybook-addon/register';
export * from './src/storybook-addon/tool';
