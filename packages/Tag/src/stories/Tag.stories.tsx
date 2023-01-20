/*import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DemoBox } from '@lerna-demo/theme';

import { Tag } from '../Tag';
//import whatsappIcon from '$icons/whatsapp.svg';

export default {
  title: 'UI/Tag',
  component: Tag,
  argTypes: {
    hasWhiteBgColor: {
      description: 'Tag hasBackgroundColor',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    iconProps: {
      description: 'Tag icon',
      options: ['icon', 'withoutIcon'],
      //mapping: { icon: whatsappIcon, withoutIcon: '' },
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'withoutIcon' },
      },
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = args => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tag',
  color: 'success',
};

export const Success = () => (
  <>
    <DemoBox bottom>
      <Tag color="success">Label</Tag>
    </DemoBox>
    <DemoBox bottom>
      <Tag color="success" iconProps={{ icon: whatsappIcon }}>
        Label
      </Tag>
    </DemoBox>
    <DemoBox bottom>
      <Tag hasWhiteBgColor color="success" iconProps={{ icon: whatsappIcon }}>
        Label
      </Tag>
    </DemoBox>
  </>
);
export const Warning = () => <Tag color="warning">Label</Tag>;
export const Information = () => <Tag color="information">Label</Tag>;
export const Danger = () => <Tag color="danger">Label</Tag>;
export const bGamerBlack = () => <Tag color="bGamerBlack">Label</Tag>;
export const bGamerMagenta = () => <Tag color="bGamerMagenta">Label</Tag>;
export const bGamerBlue = () => <Tag color="bGamerBlue">Label</Tag>;
*/
