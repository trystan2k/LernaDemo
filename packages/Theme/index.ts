import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { THEME_1 } from './src/theme1';
import { THEME_2 } from './src/theme2';
import { FOUNDATIONS } from './src/foundations';

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

export { styled, ThemeProvider, THEME_1, THEME_2, type ThemeType };
