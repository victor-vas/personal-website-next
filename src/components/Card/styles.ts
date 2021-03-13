import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.menuBackground};
  border: 1px solid ${({ theme }) => theme.borders};
  font-size: 1.8rem;
  border-radius: 6px;
  padding: 0.8rem;
  cursor: pointer;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.texts};
    transition: color 0.4s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.highlight};
    }
  }

  h3 {
    margin-top: 0.8rem;
  }
`;
