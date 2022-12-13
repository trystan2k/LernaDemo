import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio } from '../Radio';

export default {
  title: 'UI/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Radio',
};
