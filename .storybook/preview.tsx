import React from 'react';
import { WithThemeProvider } from 'storybook-addon-styled-components-themes';
import { THEME_1, THEME_2, GlobalStyles } from '@lerna-demo/theme';

const themes = [THEME_1, THEME_2];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  styledComponentsThemes: {
    themes,
    label: 'name'
  },
}

export const decorators = [
  (Story) => (
    <WithThemeProvider>
      <GlobalStyles />
      <Story />
    </WithThemeProvider>
  ),
];
