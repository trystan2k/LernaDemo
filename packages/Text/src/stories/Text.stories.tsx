import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Text } from '../Text';

export default {
  title: 'Nueva Banca Digital/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => (
  <Text {...args}>
    Considerando que la libertad, la justicia y la paz en el mundo tienen por base el reconocimiento de la dignidad
    intrínseca y de los derechos iguales e inalienables de todos los miembros de la familia humana. Considerando
    esencial que los derechos humanos sean protegidos por un régimen de Derecho, a fin de que el hombre no se vea
    compelido al supremo recurso de la rebelión contra la tiranía y la opresión.
  </Text>
);

export const XSText = Template.bind({});
XSText.args = {
  fontConfig: { fontSize: 'size12', weight: 800 },
};
export const SText = Template.bind({});
SText.args = {
  fontConfig: { fontSize: 'size14', weight: 'BOLD' },
};
export const MText = Template.bind({});
MText.args = {
  fontConfig: { fontSize: 'size16' },
};
export const Uppercase = Template.bind({});
Uppercase.args = {
  fontConfig: { uppercase: true },
};
export const WithColor = Template.bind({});
WithColor.args = {
  fontConfig: { fontColor: 'jade' },
};
