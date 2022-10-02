import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string
    headings: string
    color: string
    transitionTime: string
    shadow: string
    primary: string
  }
}
