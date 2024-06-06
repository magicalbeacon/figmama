import React from 'react';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Example/NewButtons',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const PrimaryResting = Template.bind({});
PrimaryResting.args = {
  primary: true,
  children: 'Primary, Resting',
};

export const PrimaryHover = Template.bind({});
PrimaryHover.args = {
  primary: true,
  children: 'Primary, Hover',
};
PrimaryHover.parameters = {
  pseudo: { hover: true },
};

export const PrimaryPressed = Template.bind({});
PrimaryPressed.args = {
  primary: true,
  children: 'Primary, Pressed',
};
PrimaryPressed.parameters = {
  pseudo: { active: true },
};

export const PrimaryFocused = Template.bind({});
PrimaryFocused.args = {
  primary: true,
  children: 'Primary, Focused',
};
PrimaryFocused.parameters = {
  pseudo: { focus: true },
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  primary: true,
  children: 'Primary, Disabled',
  disabled: true,
};

export const PrimaryWithIconResting = Template.bind({});
PrimaryWithIconResting.args = {
  primary: true,
  children: 'Primary w/Icon, Resting',
};

export const PrimaryWithIconHover = Template.bind({});
PrimaryWithIconHover.args = {
  primary: true,
  children: 'Primary w/Icon, Hover',
};
PrimaryWithIconHover.parameters = {
  pseudo: { hover: true },
};

export const PrimaryWithIconPressed = Template.bind({});
PrimaryWithIconPressed.args = {
  primary: true,
  children: 'Primary w/Icon, Pressed',
};
PrimaryWithIconPressed.parameters = {
  pseudo: { active: true },
};

export const PrimaryWithIconFocused = Template.bind({});
PrimaryWithIconFocused.args = {
  primary: true,
  children: 'Primary w/Icon, Focused',
};
PrimaryWithIconFocused.parameters = {
  pseudo: { focus: true },
};

export const PrimaryWithIconDisabled = Template.bind({});
PrimaryWithIconDisabled.args = {
  primary: true,
  children: 'Primary w/Icon, Disabled',
  disabled: true,
};

// Secondary Button Stories
export const SecondaryResting = Template.bind({});
SecondaryResting.args = {
  primary: false,
  children: 'Secondary, Resting',
};

export const SecondaryHover = Template.bind({});
SecondaryHover.args = {
  primary: false,
  children: 'Secondary, Hover',
};
SecondaryHover.parameters = {
  pseudo: { hover: true },
};

export const SecondaryPressed = Template.bind({});
SecondaryPressed.args = {
  primary: false,
  children: 'Secondary, Pressed',
};
SecondaryPressed.parameters = {
  pseudo: { active: true },
};

export const SecondaryFocused = Template.bind({});
SecondaryFocused.args = {
  primary: false,
  children: 'Secondary, Focused',
};
SecondaryFocused.parameters = {
  pseudo: { focus: true },
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  primary: false,
  children: 'Secondary, Disabled',
  disabled: true,
};

export const SecondaryWithIconResting = Template.bind({});
SecondaryWithIconResting.args = {
  primary: false,
  children: 'Secondary w/Icon, Resting',
};

export const SecondaryWithIconHover = Template.bind({});
SecondaryWithIconHover.args = {
  primary: false,
  children: 'Secondary w/Icon, Hover',
};
SecondaryWithIconHover.parameters = {
  pseudo: { hover: true },
};

export const SecondaryWithIconPressed = Template.bind({});
SecondaryWithIconPressed.args = {
  primary: false,
  children: 'Secondary w/Icon, Pressed',
};
SecondaryWithIconPressed.parameters = {
  pseudo: { active: true },
};

export const SecondaryWithIconFocused = Template.bind({});
SecondaryWithIconFocused.args = {
  primary: false,
  children: 'Secondary w/Icon, Focused',
};
SecondaryWithIconFocused.parameters = {
  pseudo: { focus: true },
};

export const SecondaryWithIconDisabled = Template.bind({});
SecondaryWithIconDisabled.args = {
  primary: false,
  children: 'Secondary w/Icon, Disabled',
  disabled: true,
};

// Other Button Types

export const LabelResting = Template.bind({});
LabelResting.args = {
  children: 'Label',
};

export const LabelHover = Template.bind({});
LabelHover.args = {
  children: 'Label',
};
LabelHover.parameters = {
  pseudo: { hover: true },
};

export const LabelPressed = Template.bind({});
LabelPressed.args = {
  children: 'Label',
};
LabelPressed.parameters = {
  pseudo: { active: true },
};

export const LabelFocused = Template.bind({});
LabelFocused.args = {
  children: 'Label',
};
LabelFocused.parameters = {
  pseudo: { focus: true },
};

export const LabelDisabled = Template.bind({});
LabelDisabled.args = {
  children: 'Label',
  disabled: true,
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Text button',
};

export const TextButtonHover = Template.bind({});
TextButtonHover.args = {
  children: 'Text button',
};
TextButtonHover.parameters = {
  pseudo: { hover: true },
};

export const TextButtonPressed = Template.bind({});
TextButtonPressed.args = {
  children: 'Text button',
};
TextButtonPressed.parameters = {
  pseudo: { active: true },
};

export const TextButtonFocused = Template.bind({});
TextButtonFocused.args = {
  children: 'Text button',
};
TextButtonFocused.parameters = {
  pseudo: { focus: true },
};

export const TextButtonDisabled = Template.bind({});
TextButtonDisabled.args = {
  children: 'Text button',
  disabled: true,
};

export const Hyperlink = Template.bind({});
Hyperlink.args = {
  children: 'Hyperlink',
};

export const HyperlinkHover = Template.bind({});
HyperlinkHover.args = {
  children: 'Hyperlink',
};
HyperlinkHover.parameters = {
  pseudo: { hover: true },
};

export const HyperlinkPressed = Template.bind({});
HyperlinkPressed.args = {
  children: 'Hyperlink',
};
HyperlinkPressed.parameters = {
  pseudo: { active: true },
};

export const HyperlinkFocused = Template.bind({});
HyperlinkFocused.args = {
  children: 'Hyperlink',
};
HyperlinkFocused.parameters = {
  pseudo: { focus: true },
};

export const HyperlinkDisabled = Template.bind({});
HyperlinkDisabled.args = {
  children: 'Hyperlink',
  disabled: true,
};