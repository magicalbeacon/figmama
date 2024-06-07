import React from 'react';
import { storiesOf } from '@storybook/react';

const styles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '16px',
  maxWidth: '1024px',
  margin: '0 auto',
};

const buttonStyles = {
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
};

const primaryColors = {
  Resting: '#0061f2',
  Hover: '#0056d2',
  Pressed: '#0040a0',
  Focused: '#002b6f',
  Disabled: '#f0f0f0',
};

const secondaryColors = {
  Resting: '#0096ff',
  Hover: '#007acc',
  Pressed: '#005fa0',
  Focused: '#003d70',
  Disabled: '#e0e0e0',
};

const icon = '→';

const PrimaryButton = ({ state }) => (
  <button
    style={{
      ...buttonStyles,
      backgroundColor: primaryColors[state],
      color: state === 'Disabled' ? '#a0a0a0' : '#fff',
    }}
    disabled={state === 'Disabled'}
  >
    Primary {state}
  </button>
);

const SecondaryButton = ({ state }) => (
  <button
    style={{
      ...buttonStyles,
      backgroundColor: secondaryColors[state],
      color: state === 'Disabled' ? '#a0a0a0' : '#fff',
    }}
    disabled={state === 'Disabled'}
  >
    Secondary {state}
  </button>
);

storiesOf('NewButtons', module)
  .add('Primary Buttons', () => (
    <div style={styles}>
      <PrimaryButton state="Resting" />
      <PrimaryButton state="Hover" />
      <PrimaryButton state="Pressed" />
      <PrimaryButton state="Focused" />
      <PrimaryButton state="Disabled" />
      <PrimaryButton state="Resting">
        <span>{icon}</span>
      </PrimaryButton>
      <PrimaryButton state="Hover">
        <span>{icon}</span>
      </PrimaryButton>
      <PrimaryButton state="Pressed">
        <span>{icon}</span>
      </PrimaryButton>
      <PrimaryButton state="Focused">
        <span>{icon}</span>
      </PrimaryButton>
      <PrimaryButton state="Disabled" />
    </div>
  ))
  .add('Secondary Buttons', () => (
    <div style={styles}>
      <SecondaryButton state="Resting" />
      <SecondaryButton state="Hover" />
      <SecondaryButton state="Pressed" />
      <SecondaryButton state="Focused" />
      <SecondaryButton state="Disabled" />
      <SecondaryButton state="Resting">
        <span>{icon}</span>
      </SecondaryButton>
      <SecondaryButton state="Hover">
        <span>{icon}</span>
      </SecondaryButton>
      <SecondaryButton state="Pressed">
        <span>{icon}</span>
      </SecondaryButton>
      <SecondaryButton state="Focused">
        <span>{icon}</span>
      </SecondaryButton>
      <SecondaryButton state="Disabled" />
    </div>
  ));