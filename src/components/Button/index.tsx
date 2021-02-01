import React from 'react';
import { ButtonContainer } from './styles';

interface IButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
  onClick?(): any;
  style?: React.CSSProperties;
}

const Button: React.FC<IButtonProps> = ({
  children,
  type,
  disabled,
  ...props
}) => (
  <ButtonContainer disabled={disabled} type={type} {...props}>
    {children}
  </ButtonContainer>
);

export default Button;
