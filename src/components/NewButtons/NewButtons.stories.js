import React from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'New Buttons',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryResting = Template.bind({});
PrimaryResting.args = {
  children: 'Primary, Resting',
  variant: 'primary',
  state: 'resting',
};

export const PrimaryHover = Template.bind({});
PrimaryHover.args = {
  children: 'Primary, Hover',
  variant: 'primary',
  state: 'hover',
};

export const PrimaryPressed = Template.bind({});
PrimaryPressed.args = {
  children: 'Primary, Pressed',
  variant: 'primary',
  state: 'pressed',
};

export const PrimaryFocused = Template.bind({});
PrimaryFocused.args = {
  children: 'Primary, Focused',
  variant: 'primary',
  state: 'focused',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: 'Primary, Disabled',
  variant: 'primary',
  state: 'disabled',
  disabled: true,
};

export const PrimaryWithIconResting = Template.bind({});
PrimaryWithIconResting.args = {
  children: 'Primary w/ Icon, Resting',
  variant: 'primary',
  icon: 'arrow',
  state: 'resting',
};

export const SecondaryResting = Template.bind({});
SecondaryResting.args = {
  children: 'Secondary, Resting',
  variant: 'secondary',
  state: 'resting',
};

export const SecondaryHover = Template.bind({});
SecondaryHover.args = {
  children: 'Secondary, Hover',
  variant: 'secondary',
  state: 'hover',
};

export const SecondaryPressed = Template.bind({});
SecondaryPressed.args = {
  children: 'Secondary, Pressed',
  variant: 'secondary',
  state: 'pressed',
};

export const SecondaryFocused = Template.bind({});
SecondaryFocused.args = {
  children: 'Secondary, Focused',
  variant: 'secondary',
  state: 'focused',
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: 'Secondary, Disabled',
  variant: 'secondary',
  state: 'disabled',
  disabled: true,
};

export const SecondaryWithIconResting = Template.bind({});
SecondaryWithIconResting.args = {
  children: 'Secondary w/ Icon, Resting',
  variant: 'secondary',
  icon: 'arrow',
  state: 'resting',
};

export const TertiaryLabel = Template.bind({});
TertiaryLabel.args = {
  children: 'Label',
  variant: 'tertiary',
  state: 'resting',
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Text button',
  variant: 'text',
  state: 'resting',
};

export const HyperlinkButton = Template.bind({});
HyperlinkButton.args = {
  children: 'Hyperlink',
  variant: 'link',
  state: 'resting',
};