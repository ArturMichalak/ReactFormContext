import React from 'react';
import { Button, ButtonProps } from './button';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs],
};

export const primary = () => {
  const props: ButtonProps = {
    children: text('Label', 'Press Me'),
    background: select(
      'Color',
      { Primary: 'blue', Secondary: 'red', Warning: 'orange', None: null },
      'blue'
    ),
  };

  return <Button {...props} />;
};
