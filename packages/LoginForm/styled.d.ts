import 'styled-components';
import { ThemeType } from '@lerna-demo/theme';
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {
    /* extend the default theme */
  }
}
