import styled from 'styled-components';

export const AsideContainer = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 300;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  grid-area: menu;
  background-color: ${({ theme }) => theme.menuBackground};
  border-right: 1px solid ${({ theme }) => theme.borders};
  padding: 4rem;
  transition: all 0.6s ease-in-out;

  .bio-container {
    width: 25rem;
    margin-top: 2rem;

    h1 {
      font: 700 2.8rem 'Source Sans Pro';
      color: ${({ theme }) => theme.texts};

      small {
        font: 400 1.6rem 'Oxygen';
        display: block;
      }
    }

    p {
      font: 400 1.6rem 'Oxygen';
      color: ${({ theme }) => theme.texts};
      margin: 2rem 0;
    }
  }

  @media (max-width: 1000px) {
    left: -100%;
  }
`;

export const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .social-icon {
    font-size: 2.4rem;
    margin: 1.2rem;
  }
`;
