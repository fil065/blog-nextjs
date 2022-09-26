import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid lightgray;
    box-shadow: 1px 1px 3px lightgray;
`
const Logo = styled.h1`
    font-weight: bold;
    font-size: 1.5rem;
`

const ContainerNavLink = styled.div`
    & a:first-child {
        margin-right: 1rem;
    }
`

const Search = styled.input`
    border: 1px solid lightgray;
    border-radius: 15px;
    padding: 5px;
`

export default function NavBar() {
    return (
        <Nav>
            <Logo>LazyDev</Logo>
            <ContainerNavLink>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </ContainerNavLink>
            <Search />
        </Nav>
    )
}
