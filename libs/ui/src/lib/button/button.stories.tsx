import React from 'react';
import { Button, ButtonProps } from './button';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
  component: Button,
  title: 'Styled Button',
  decorators: [withKnobs],
};

export const primary = () => {
  const props: ButtonProps = {
    children: text('Label', 'Press Me'),
    backgroundColor: select(
      'Color',
      { Primary: 'blue', Secondary: 'red', Warning: 'orange' },
      'blue'
    ),
  };

  return <Button component="span" {...props} />;
};
