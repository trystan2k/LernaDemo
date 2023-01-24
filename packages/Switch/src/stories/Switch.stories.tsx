import { ComponentStory, ComponentMeta } from '@storybook/react';
import { styled } from '@lerna-demo/theme';
import { Switch } from '../Switch';
/*import { Formik, Form } from 'formik';
import { SwitchField } from '$views/components/formikFields/Switch/Switch.dailyBanking';
import { action } from '@storybook/addon-actions'; */

export default {
  title: 'UI/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Esto es un switch',
  name: 'switch',
  id: 'switch',
  defaultChecked: true,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Success = () => (
  <Container>
    <Switch label="Esto es un switch" name="switch" id="switch" defaultChecked={true} />
    <Switch label="Esto es un switch" name="switch2" id="switch2" />
    <Switch label="Esto es un switch" name="switch3" id="switch3" disabled={true} />
    <Switch label="Esto es un switch" name="switch4" id="switch4" disabled={true} defaultChecked={true} />
  </Container>
);

/*const TemplateWihtFormik: Story = args => (
  <Formik
    initialValues={{
      switch: true,
      switch2: false,
      switch3: false,
      switch4: true,
    }}
    onSubmit={values => action('onSubmit')(values)}>
    <Form>
      <Container>
        <SwitchField label="Esto es un switch" name="switch" id="switch" />
        <SwitchField label="Esto es un switch" name="switch2" id="switch2" />
        <SwitchField label="Esto es un switch" name="switch3" id="switch3" disabled={true} />
        <SwitchField label="Esto es un switch" name="switch4" id="switch4" disabled={true} />
      </Container>
      <button type="submit">enviar</button>
    </Form>
  </Formik>
);*/

/*export const WithFormik = TemplateWihtFormik.bind({});
WithFormik.args = {};*/
