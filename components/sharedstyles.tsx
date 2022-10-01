import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
    max-width: 50rem;

`

export const StyledLink = styled.a`
    font-weight: bold;
    transition: 0.2s;
    &:hover
     {
        color: lime;
    }
`