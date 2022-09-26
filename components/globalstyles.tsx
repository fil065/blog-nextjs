import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  /* font-family: 'Press Start 2P'; */
  /* font-family: 'Noto Sans Mono', monospace; */
  /*  font-weight: 900; */
  /* font-family: 'Rubik Mono One', sans-serif; */
  /* font-family: 'JetBrains Mono', monospace; */
  /* font-weight: 800; */
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0;
    margin: 0;
    font-family: 'Roboto Mono', monospace;
  } 
  
  #__next {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
  }

`

export default GlobalStyle
