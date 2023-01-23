import { addons } from '@storybook/addons';
import { ReactNode, useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { CHANNEL } from './models';

export const WithThemeProvider = ({ children, themes }: { children: ReactNode; themes: DefaultTheme[] }) => {
  const [indexThemeSelected, setIndexThemeSelected] = useState(0);
  const channel = addons.getChannel();

  const handleChangeTheme = (id: string) => {
    // @ts-ignore
    const index = themes.findIndex(theme => theme.id === id);
    setIndexThemeSelected(index || 0);
  };

  useEffect(() => {
    channel.on(CHANNEL.CHANGE_THEME, handleChangeTheme);
    channel.emit(CHANNEL.REQUEST_THEMES);
    return () => {
      channel.removeListener(CHANNEL.CHANGE_THEME, handleChangeTheme);
    };
  }, []);

  return (
    <>
      {themes && themes.length ? <ThemeProvider theme={themes[indexThemeSelected]}>{children}</ThemeProvider> : <></>}
    </>
  );
};

export default WithThemeProvider;
