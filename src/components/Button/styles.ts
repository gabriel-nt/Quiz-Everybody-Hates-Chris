import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 13px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.25px;
  border-radius: 4px;
  line-height: 16px;
  border: 0;
  background-color: #3269c1;
  color: ${({ theme }) => theme.colors.contrastText};
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #979797;
  }
`;
