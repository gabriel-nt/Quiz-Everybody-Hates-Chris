import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface IAlternativeProps {
  isSelected: boolean;
  alternativeStatus: false | 'error' | 'success';
}

const Alternative = styled(motion.button)<IAlternativeProps>`
  display: flex;
  color: ${({ theme }) => theme.colors.contrastText};
  padding: 12px 15px 12px 12px;
  border-radius: 4px;
  width: 100%;
  cursor: pointer;
  text-align: left;
  outline: 0;
  font-size: 16px;
  transition: background 0.2s;
  background-color: ${({ theme }) => theme.colors.primary};

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors.contrastText}3D; ;
    `}

  ${({ theme, isSelected, alternativeStatus }) =>
    isSelected &&
    alternativeStatus === 'error' &&
    css`
      background-color: ${theme.colors.wrong};
    `} 

  ${({ theme, isSelected, alternativeStatus }) =>
    isSelected &&
    alternativeStatus === 'success' &&
    css`
      background-color: ${theme.colors.success};
    `} 

  &:hover {
    background-color: ${({ theme }) => theme.colors.contrastText}3D;
  }

  & + button {
    margin-top: 10px;
  }

  & + button:last-child {
    margin-top: 20px;
  }
`;

export default Alternative;
