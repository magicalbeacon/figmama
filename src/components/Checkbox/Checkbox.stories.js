import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'This is an option',
};

export const RequiredAcknowledgement = Template.bind({});
RequiredAcknowledgement.args = {
  label: 'This is an option',
  errorMessage: '👍 Acknowledgement is required.',
};