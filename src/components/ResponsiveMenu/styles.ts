import styled from 'styled-components';

export const ResponsiveMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: ${({ theme }) => theme.menuBackground};
  border-bottom: 1px solid ${({ theme }) => theme.borders};
  padding: 0.8rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.6s ease-in-out;

  .profile {
    display: flex;
    align-items: center;

    h1 {
      font: 700 2.2rem 'Source Sans Pro';
      color: ${({ theme }) => theme.texts};
      margin-left: 1rem;

      small {
        font: 400 1.4rem 'Oxygen';
        display: block;
      }
    }
  }

  .right-menu {
    display: flex;
    align-items: center;

    .menu-icon {
      width: 5rem;
      margin-left: 2rem;
      z-index: 200;
      color: ${({ theme }) => theme.texts};
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.postColor};
        background-color: ${({ theme }) => theme.highlight};
      }
    }
  }

  @media (min-width: 1000px) {
    top: -100%;
  }
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  position: absolute;
  top: -100%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: all 0.6s ease-in-out;

  .nav-container {
    margin-bottom: 3.2rem;
  }

  .nav-item {
    font: 400 3.2rem 'Oxygen';
    color: ${({ theme }) => theme.texts};
  }

  .social-icon {
    margin: 2.4rem;
    margin-top: 10rem;
    font-size: 3.2rem;
  }

  .active {
    color: ${({ theme }) => theme.highlight};
  }

  @media (max-width: 1000px) {
    &.active-menu {
      top: 0;
    }
  }
`;
