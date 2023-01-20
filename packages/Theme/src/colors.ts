import { mix } from 'polished';

export interface ColorsInterface {
  white: string;
  anthracite: string;

  jade: string;
  basil: string;
  english: string;
  mustard: string;
  crimson: string;

  gray1Background: string;
  gray2Background: string;

  info: string;
  error: string;
  danger: string;
  success: string;

  blueText: string;
  brownText: string;

  grayContent: string;

  gray1Border: string;
  gray2Border: string;

  shadowColor: (color: string) => string;
  shadowColorUp: (color: string) => string;

  darkBlueBGamer: string;
  mediumBlueBGamer: string;
  semiLightBlueBGamer: string;
  lightBlue1BGamer: string;
  lightBlue2BGamer: string;
  darkYellowBGamer: string;
  lightYellowBGamer: string;
  darkMagentaBGamer: string;
  lightMagentaBGamer: string;
  grayBGamer: string;
  mediumGrayBGamer: string;
  lightGray1BGamer: string;
  lightGray2BGamer: string;
  lightGray3BGamer: string;
  liberbank: string;
}

export const colors: ColorsInterface = {
  white: '#FFFFFF',
  anthracite: '#2B333B',

  jade: '#008037',
  basil: '#006241',
  english: '#103829',
  mustard: '#F5B451',
  crimson: '#A61C25',

  gray1Background: '#F8F9FA',
  gray2Background: '#E9ECEF',

  info: '#EEF7FB',
  error: '#FDEDEE',
  danger: '#FEF6DC',
  success: '#EDF9EB',

  blueText: '#0058B8',
  brownText: '#8E5119',

  grayContent: '#6D737E',

  gray1Border: '#D3D9DF',
  gray2Border: '#8E949F',

  shadowColor: (color: string) => mix(0.2, '#000000', color),
  shadowColorUp: (color: string) => mix(0.5, '#1B242D', color),

  darkBlueBGamer: '#00439C',
  mediumBlueBGamer: '#0070CC',
  semiLightBlueBGamer: '#93C9F5',
  lightBlue1BGamer: '#C8E6FA',
  lightBlue2BGamer: '#D5ECFB',
  darkYellowBGamer: '#EDAF21',
  lightYellowBGamer: '#FEF6D2',
  darkMagentaBGamer: '#B51F80',
  lightMagentaBGamer: '#F9E6EA',
  grayBGamer: '#f5f7f6',
  mediumGrayBGamer: '#A1A3A3',
  lightGray1BGamer: '#C4C4C4',
  lightGray2BGamer: '#E2E4E4',
  lightGray3BGamer: '#EFF1F1',
  liberbank: '#FEF8E6',
};
