import styled from 'styled-components';
import { MainContainer } from 'styles/global';

export const Education = styled(MainContainer)`
  h2 {
    font: 700 4.2rem 'Source Sans Pro';
    color: ${({ theme }) => theme.postColor};
    margin-bottom: 1.8rem;
  }
`;

export const TimelineContainer = styled.article`
  display: flex;
  justify-content: center;

  & p {
    margin-bottom: 0;
  }
`;

export const TimelineCenter = styled.div`
  width: 80vw;
  max-width: 40rem;
`;
