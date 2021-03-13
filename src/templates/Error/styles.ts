import styled from 'styled-components';
import { MainContainer } from 'styles/global';

export const Error = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.texts};
    font-size: 20rem;
  }

  p {
    color: ${({ theme }) => theme.texts};
    font-size: 2rem;
  }

  .btn {
    font-size: 2rem;
    text-decoration: none;
    background-color: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.white};
    padding: 10px;
    border-radius: 10px;
    margin-top: 30px;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;
