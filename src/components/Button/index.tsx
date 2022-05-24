import React from 'react';

export interface ButtonProps {
  label: string;
}

export const Button: React.FC = (props: ButtonProps) => {
  return <button>{props.label}</button>;
}
