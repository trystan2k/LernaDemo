export interface ThemeParameters {
  /**
   * Themes
   */
  themes: { [key: string]: string };
}

export enum CHANNEL {
  CHANGE_THEME = 'change-theme',
  REQUEST_THEMES = 'request-themes',
}
