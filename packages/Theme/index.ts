import styled, { ThemeProvider, createGlobalStyle, css, FlattenSimpleInterpolation } from 'styled-components';
import { THEME_1 } from './src/theme1';
import { THEME_2 } from './src/theme2';
import { FOUNDATIONS } from './src/foundations';

import { breakpoints, ThemeBreakpoints, MAX_ULTRA_WIDE_DIMEN, isDesktopOrHigher } from './src/breakpoints';
import { colors, ColorsInterface } from './src/colors';
import {
  FontFamily,
  TextFontWeight,
  FontTypeVariants,
  FontWeight,
  TypiValue,
  FontInterface,
  font,
  generateFontSize,
} from './src/font';
import { MarginProps, MarginPropsDesktopAndUltraWide, marginsCss, marginsCssDesktopAndUltraWide } from './src/margins';
import { Breakpoint, MediaInterface, media, withCSSreakpoint } from './src/media';
// import { BASE_SIZE, Size, SizeName, SizesInterface, sizes } from './src/DemoBox';
// import { DemoBox } from './src/size';

type ThemeType = typeof THEME_1 & typeof THEME_2;

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

export { styled, ThemeProvider, css, FlattenSimpleInterpolation, THEME_1, THEME_2, type ThemeType };

export { breakpoints, ThemeBreakpoints, MAX_ULTRA_WIDE_DIMEN, isDesktopOrHigher };
export { colors, ColorsInterface };
export { MarginProps, MarginPropsDesktopAndUltraWide, marginsCss, marginsCssDesktopAndUltraWide };
export { FontFamily, TextFontWeight, FontTypeVariants, FontWeight, TypiValue, FontInterface, font, generateFontSize };
export { Breakpoint, MediaInterface, media, withCSSreakpoint };
// export { BASE_SIZE, Size, SizeName, SizesInterface, sizes };
// export { DemoBox };
