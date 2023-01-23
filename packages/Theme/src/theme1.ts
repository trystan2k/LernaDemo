import { FOUNDATIONS } from './foundations';

export const THEME_1 = {
  ...FOUNDATIONS,
  id: 'id2',
  colors: {
    ...FOUNDATIONS.colors,
    primary: {
      100: '#e2eaf7',
      200: '#cbdbf2',
      300: '#a7c4e9',
      400: '#7da5dd',
      500: '#527ecf',
      600: '#4b6ec5',
    },
    secondary: {
      100: '#ffe4e6',
      200: '#fdced3',
      300: '#fca5af',
      400: '#f97788',
      500: '#f1425e',
      600: '#de2047',
    },
  },
};
