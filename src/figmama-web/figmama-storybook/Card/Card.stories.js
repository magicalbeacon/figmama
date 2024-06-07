import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Garfield',
  image: 'https://via.placeholder.com/150',
  description: 'Garfield, the world-famous, lovable, and often lazy cat. Watch his antics and have a laugh! Coming soon in June 2024!',
};

export const WithActionButton = Template.bind({});
WithActionButton.args = {
  title: 'Garfield',
  image: 'https://via.placeholder.com/150',
  description: 'Garfield, the world-famous, lovable, and often lazy cat. Watch his antics and have a laugh! Coming soon in June 2024!',
  actionText: 'Watch Trailer',
};

export const WithLink = Template.bind({});
WithLink.args = {
  title: 'Garfield',
  image: 'https://via.placeholder.com/150',
  description: 'Garfield, the world-famous, lovable, and often lazy cat. Watch his antics and have a laugh! Coming soon in June 2024!',
  linkText: 'Coming soon in June 2024!',
};