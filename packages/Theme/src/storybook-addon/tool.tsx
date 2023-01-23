import { addons } from '@storybook/addons';
import { useAddonState, useParameter } from '@storybook/api';
import { IconButton, TooltipLinkList, WithTooltip } from '@storybook/components';
import { withTheme } from '@storybook/theming';
import React, { useEffect } from 'react';
import { ADDON_ID, PARAM_KEY, TITLE } from './constants';
import { CHANNEL, ThemeParameters } from './models';

const Tool = withTheme(({ theme: themeStorybook }) => {
  const channel = addons.getChannel();

  const { themes } = useParameter<ThemeParameters>(PARAM_KEY, {
    themes: {},
  });

  const [idThemeSelected, setIdThemeSelected] = useAddonState(ADDON_ID, Object.keys(themes)[0]);

  let themeSelected = themes[idThemeSelected];

  const handleRequestThemes = () => {
    channel.emit(CHANNEL.CHANGE_THEME, idThemeSelected);
  };

  useEffect(() => {
    channel.emit(CHANNEL.CHANGE_THEME, idThemeSelected);
    channel.on(CHANNEL.REQUEST_THEMES, handleRequestThemes);
    return () => {
      channel.removeListener(CHANNEL.REQUEST_THEMES, handleRequestThemes);
    };
  }, [themeStorybook, themes, idThemeSelected]);

  const menu = () => (
    <WithTooltip
      placement="top"
      trigger="click"
      tooltip={() => (
        <TooltipLinkList
          links={Object.entries(themes).map(([key, value]) => ({
            id: `${key}`,
            title: `${value}`,
            onClick: () => setIdThemeSelected(key),
          }))}
        />
      )}
      closeOnClick>
      <IconButton title={`${TITLE}`}>{themeSelected}</IconButton>
    </WithTooltip>
  );

  return (
    <React.Fragment>{themes && Object.keys(themes).length ? menu() : <React.Fragment></React.Fragment>}</React.Fragment>
  );
});

export default Tool;
