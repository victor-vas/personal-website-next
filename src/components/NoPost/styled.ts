import styled from 'styled-components';

export const Loading = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .message {
    margin-top: 3.2rem;
    text-align: center;

    p {
      width: 40rem;
      font: 400 1.8rem 'Oxygen';
      color: ${({ theme }) => theme.postColor};
    }
  }
`;
