import React, { ElementType, FC, forwardRef, memo } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
  background: 'blue' | 'red' | 'orange' | 'green';
  component?: ElementType;
}

export const StyledButton = ({
  component = 'button',
  background,
}: ButtonProps) => styled[component as string]`
  font-family: 'Segoe UI', 'Helvetica', Arial, sans-serif;
  padding: 0.5rem 1.5rem;
  border-radius: 0.3rem;
  color: ${{
    red: '#fefefe',
    green: '#fefefe',
    blue: '#fefefe',
    orange: '#111',
  }[background] || '#111'};
  border: 0 solid #000;
  background-color: ${{
    red: '#d32f2f',
    green: '#2e7d32',
    blue: '#2962ff',
    orange: '#f4511e',
  }[background] || '#fefefe'};
`;

export const Button: FC<ButtonProps> = memo(
  forwardRef((props, ref) => {
    const { children, background, ...spread } = props;

    const StyledComponent = StyledButton(props);

    return <StyledComponent ref={ref} children={children} {...spread} />;
  })
);

export default Button;
