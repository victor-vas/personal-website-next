import styled, { createGlobalStyle } from 'styled-components';

export const MainContainer = styled.main`
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.menuBackground};
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.highlight};
    border-radius: 8px;
  }

  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 4rem;
  padding-left: 38rem;
  transition: all 0.6s ease-in-out;

  @media (max-width: 1000px) {
    padding-top: 8rem;
    padding-left: 4rem;
  }
`;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  #__next {
    position: relative;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
`;

export default GlobalStyles;
