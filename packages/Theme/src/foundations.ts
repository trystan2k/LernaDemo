import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { font, FontFamily, FontWeight } from './font';
import { media } from './media';
import { sizes } from './size';
//import { grid } from '$utils/theme/grid'
//import { align } from './align'
//import { browsers } from './browsers'

export const FOUNDATIONS = {
  colors,
  spacing: {
    1: '1px',
    2: '2px',
    4: '4px',
    6: '6px',
    8: '8px',
    10: '10px',
    12: '12px',
    14: '14px',
    16: '16px',
    18: '18px',
    20: '20px',
    24: '24px',
    28: '28px',
    32: '32px',
    36: '36px',
    40: '40px',
    44: '44px',
    48: '48px',
    56: '56px',
    64: '64px',
    72: '72px',
    80: '80px',
    96: '96px',
  },
  shadow: {
    sm: '0 1px 3px 0 rgb(0 14 51 / 10%)',
    md: '0 4px 6px 1px rgb(0 14 51 / 10%)',
    'md-dark': ' 0 4px 8px 2px rgb(0 0 0 / 20%)',
  },
  border: {
    radius: {
      sm: '2px',
      md: '4px',
      lg: '8px',
    },
    width: {
      sm: '1px',
      md: '2px',
      lg: '4px',
    },
  },
  outline: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  typography: {
    fontFamily: '"Open Sans", sans-serif',
    base: {
      fontSize: '16px',
      lineHeight: '1.5',
      fontWeight: 'normal',
      bold: {
        fontWeight: 'bold',
      },
    },
    sm: {
      fontSize: '14px',
      lineHeight: '1.5',
      fontWeight: 'normal',
      bold: {
        fontWeight: 'bold',
      },
    },
    lg: {
      fontSize: '18px',
      lineHeight: '1.5',
      fontWeight: 'normal',
      bold: {
        fontWeight: 'bold',
      },
    },
  },
  breakpoints,
  font,
  fontFamily: FontFamily,
  fontWeight: FontWeight,
  media,
  sizes,
};
