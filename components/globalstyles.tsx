import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  html,
  body {
    color: ${({ theme }) => theme.color};
    padding: 0;
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    line-height: normal;
    background: ${({ theme }) => theme.background};
  } 
  
  #__next {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

p {
  color: ${({ theme }) => theme.color};
}

h1 {
  color: ${({ theme }) => theme.color};
}

h2 {
  color: ${({ theme }) => theme.color};
}

a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

a:active {
    color: ${({ theme }) => theme.primary};
}

a:focus {
    color: ${({ theme }) => theme.primary};
}


`

export default GlobalStyle
