export interface ThemeBreakpoints {
  tablet: number;
  desktop: number;
  ultraWide: number;
}

export const MAX_ULTRA_WIDE_DIMEN = 1920;

export const breakpoints: ThemeBreakpoints = {
  tablet: 640,
  desktop: 1024,
  ultraWide: 1366,
};

export const isDesktopOrHigher = () => window.innerWidth >= breakpoints.desktop;
