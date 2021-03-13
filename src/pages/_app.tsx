import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from 'hooks/useDarkMode';
import GlobalStyles from 'styles/global';
import { lightTheme, darkTheme } from 'styles/themes';
import Menu from 'components/Menu';
import ResponsiveMenu from 'components/ResponsiveMenu';

function App({ Component, pageProps }: AppProps) {
  const { theme, themeToggler } = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Head>
        <title>Victor Vasconcelos</title>
        <link rel="shortcut icon" href="vercel.svg" />
        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Menu theme={theme} themeToggler={themeToggler} />
      <ResponsiveMenu theme={theme} themeToggler={themeToggler} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
