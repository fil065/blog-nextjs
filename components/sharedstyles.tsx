import styled from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
  max-width: 50rem;
`

export const StyledNavLink = styled.a`
    font-weight: bold;
    transition: 0.2s;
    &:hover {
        color: lime;
    }
    &:active {
      color: lime;
  }
`

export const StyledLink = styled(Link)`
    font-weight: bold;
    transition: 0.2s;
    &:hover {
        color: lime;
    }
    &:active {
      color: lime;
  }
`