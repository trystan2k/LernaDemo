import React from 'react';
import { WithThemeProvider } from '@lerna-demo/theme';
import { THEME_1, THEME_2, GlobalStyles, theme } from '@lerna-demo/theme';

const themes = [THEME_1, THEME_2, theme];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  styledComponentsThemes: {
    themes: {
      'id1': 'Theme Unicaja',
      'id2': 'Theme Example 1',
      'id3': 'Theme Example 2',
    }
  },
}

export const decorators = [
  (Story) => (
    <WithThemeProvider themes={themes}>
      <GlobalStyles />
      <Story />
    </WithThemeProvider>
  ),
];
