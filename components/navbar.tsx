import styled from 'styled-components'
import Link from 'next/link'
import { StyledLink, StyledNavLink } from './sharedstyles'

const Nav = styled.nav`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid lightgray;
    box-shadow: 1px 1px 3px ${({ theme }) => theme.shadow};
`
const Logo = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-family: 'Press Start 2P';
`

const ContainerNavLink = styled.div`
    & a:nth-last-child(n+2) {
        margin-right: 1rem;
    }
`
const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
`

const Search = styled.input`
    border: 1px solid lightgray;
    border-radius: 2rem;
    padding: 0.9rem;
`

export const Toggler = styled.button`
display: flex;
margin-left: 1.5rem;
width: 35px;
height: 35px;
align-items: center;
justify-content: center;
color: ${props => props.theme.color};
background-color: transparent;
transition: all ${props => props.theme.transitionTime};
border: none;
outline: none;
cursor: pointer;
@media (max-width: 768px) {
  top: 5px;
  right:50%;
  transform: translate(50%, 0%);
}
`;


export default function NavBar({ toggleTheme, icon }) {

    return (
        <Nav>
            <Link href="/">
                <StyledNavLink>
                    <Logo>LazyDev</Logo>
                </StyledNavLink>
            </Link>
            <ContainerNavLink>
                <StyledLink href="/">
                    <StyledNavLink>Home</StyledNavLink>
                </StyledLink>
                <StyledLink href="/about">
                    <StyledNavLink>About</StyledNavLink>
                </StyledLink>
                <StyledLink href="/setup">
                    <StyledNavLink>SetUp</StyledNavLink>
                </StyledLink>
            </ContainerNavLink>
            <ContainerSearch>
                <Search type="text" placeholder="Search.." />
                <Toggler onClick={toggleTheme}>{icon}</Toggler>
            </ContainerSearch>
        </Nav>
    )
}
