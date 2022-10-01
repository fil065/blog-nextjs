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
    line-height: normal;
  } 
  
  #__next {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
  }

  ul {
    
  }

`

export default GlobalStyle
