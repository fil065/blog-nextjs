import type { AppProps } from 'next/app'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from '../components/globalstyles'
import '../styles/reset.css';
import Layout from '../components/layout';
import { useState } from 'react';
import { FiSun, FiMoon } from "react-icons/fi";
import { lightTheme, darkTheme } from '../utils/theme';


export default function App({ Component, pageProps }) {
  
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => { theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme) }
  const icon = theme === lightTheme ? <FiMoon size={26} /> : <FiSun size={26} />
  
  return (
    <ThemeProvider theme={theme === lightTheme ? lightTheme : darkTheme}>
        <GlobalStyle />
      <Layout toggleTheme={toggleTheme} icon={icon}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
