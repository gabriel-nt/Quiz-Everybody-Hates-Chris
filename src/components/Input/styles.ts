import styled from 'styled-components';

export const InputBase = styled.input`
  display: flex;
  width: 100%;
  background: transparent;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrastText};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.contrastText};
  }
`;
