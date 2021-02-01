import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;

  a {
    outline: 0;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => `${theme.colors.primary}`};
    padding: 10px 15px;
    cursor: pointer;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: 0.3s;
    display: block;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.contrastText}3D;
    }
  }

  li + li {
    margin-top: 10px;
  }
`;
