import { MainContainer } from '../../styles/global';
import styled from 'styled-components';

export const About = styled(MainContainer)``;

export const AboutMeTextContainer = styled.div`
  h2 {
    font: 700 4.2rem 'Source Sans Pro';
    color: ${({ theme }) => theme.postColor};
    margin-bottom: 1.8rem;
  }

  p {
    font: 400 1.8rem 'Oxygen';
    color: ${({ theme }) => theme.postColor};
    margin-bottom: 1.8rem;
  }
`;

export const TechnologiesContainer = styled.div`
  margin-top: 80px;

  h3 {
    font: 700 3.6rem 'Source Sans Pro';
    color: ${({ theme }) => theme.postColor};
    margin-bottom: 1.8rem;
  }

  .techs-bg {
    width: 100%;
    height: 30rem;
    padding: 2rem;
    background-color: ${({ theme }) => theme.menuBackground};
    border: 3px solid ${({ theme }) => theme.borders};
    border-radius: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    margin: auto 0;
    transition: all 0.6s ease-in-out;

    img {
      padding: 0.8rem;
    }
  }
`;
