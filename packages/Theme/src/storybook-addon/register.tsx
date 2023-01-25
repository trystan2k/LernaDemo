// @ts-ignore
import React from 'react';

import { addons, types } from '@storybook/addons';
import { ADDON_ID, PANEL_ID, TITLE } from './constants';
import Tool from './tool';

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.TOOL,
    title: TITLE,
    render: () => <Tool />,
  });
});
