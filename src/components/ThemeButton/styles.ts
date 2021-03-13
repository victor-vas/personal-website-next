import styled from 'styled-components';

export const ThemeButtonStyled = styled.button`
  padding: 0.8rem;
  background-color: purple;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.borders};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 0.4s ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`;
