import { font, FontFamily, FontWeight } from './font';
import { media } from './media';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { sizes } from './size';
// import { grid } from '$utils/theme/grid'
// import { align } from './align'
// import { browsers } from './browsers'
import { DefaultTheme } from 'styled-components';
import { FOUNDATIONS } from './foundations';

export const theme: DefaultTheme = {
  ...FOUNDATIONS,
  id: 'id1',
  controls: {
    height: sizes.scale(9),
  },
  breakpoints,
  contentMaxWidth: 1200,
  formMaxWidth: 400,
  tabFormContainerPadding: 15,
  font,
  fontFamily: FontFamily,
  fontWeight: FontWeight,
  media,
  colors,
  sizes,
};
