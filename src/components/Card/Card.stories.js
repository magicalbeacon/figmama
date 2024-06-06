import React from 'react';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Garfield',
  description: 'Garfield, the world-famous, fuzzy orange cat, is coming back. Watch for his mischief and witty quips as he returns to the big screen!',
  image: 'https://path/to/garfield-image.jpg',
  date: 'Coming soon in June 2024!',
};

export const WithAction = Template.bind({});
WithAction.args = {
  title: 'Garfield',
  description: 'Garfield, the world-famous, fuzzy orange cat, is coming back. Watch for his mischief and witty quips as he returns to the big screen!',
  image: 'https://path/to/garfield-image.jpg',
  date: 'Coming soon in June 2024!',
  actionText: 'Learn More',
  onAction: () => alert('More details about Garfield coming soon!'),
};

export const Highlight = Template.bind({});
Highlight.args = {
  title: 'Garfield',
  description: 'Garfield, the world-famous, fuzzy orange cat, is coming back. Watch for his mischief and witty quips as he returns to the big screen!',
  image: 'https://path/to/garfield-image.jpg',
  date: 'Coming soon in June 2024!',
  highlight: true,
};