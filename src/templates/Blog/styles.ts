import styled from 'styled-components';
import { MainContainer } from '../../styles/global';

export const Blog = styled(MainContainer)`
  h2 {
    font: 700 4.2rem 'Source Sans Pro';
    color: ${({ theme }) => theme.postColor};
    margin-bottom: 1.8rem;
  }
`;

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 3rem;
`;
