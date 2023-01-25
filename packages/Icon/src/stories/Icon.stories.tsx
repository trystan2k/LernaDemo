import { ComponentStory, ComponentMeta } from '@storybook/react';

import filledSavingsIcon from './SavingsFilled.svg';
import miniSavingsIcon from './Savings.svg';

import { Icon } from '../Icon';

export default {
  title: 'UI/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Icon',
  disabled: false,
};

export const SmallIconWithoutBorderAndBackground = Template.bind({});
SmallIconWithoutBorderAndBackground.args = {
  content: miniSavingsIcon,
  size: 'dimension24',
  config: {
    color: 'crimson',
  },
};

export const MediumIconWithBorder = Template.bind({});
MediumIconWithBorder.args = {
  content: miniSavingsIcon,
  size: 'dimension32',
  config: {
    color: 'basil',
    hasBorder: true,
  },
};

export const BigIconWithoutBorder = Template.bind({});
BigIconWithoutBorder.args = {
  content: filledSavingsIcon,
  size: 'dimension48',
  config: {
    color: 'mustard',
  },
};
