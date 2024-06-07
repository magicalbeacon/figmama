import React from 'react';

import Card from './Card';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: 'Garfield',
  description: 'Garfield, the world-famous, orange tabby. Known for his love of lasagna, naps, and staying indoors. Maybe even cuddling next to a warm fire or cozying up on the couch for a good book.',
  image: 'https://example.com/garfield.jpg',
  footer: 'Coming soon in June 2024!',
};

export const FeaturedCard = Template.bind({});
FeaturedCard.args = {
  ...DefaultCard.args,
  badge: 'Featured',
};

export const HoverCard = Template.bind({});
HoverCard.args = {
  ...DefaultCard.args,
  footer: <div style={{color: 'blue'}}>Coming soon in June 2024!</div>,
};