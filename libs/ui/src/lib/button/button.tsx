import React, { ElementType, FC, forwardRef, memo } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
  backgroundColor: 'blue' | 'red' | 'orange';
  component?: ElementType;
}

export const Button: FC<ButtonProps> = memo(
  forwardRef((props, ref) => {
    const {
      children,
      backgroundColor,
      component: ComponentProp = 'button',
      ...spread
    } = props;

    return (
      <ComponentProp
        ref={ref}
        children={children}
        style={{ backgroundColor }}
        {...spread}
      />
    );
  })
);

export default Button;
