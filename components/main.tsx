import styled from 'styled-components'

const MainStyled = styled.main`
    flex-grow: 1;
    margin: 5rem auto;
    /* max-width: 36rem; */
`

export default function Main({ children }) {
    return (
        <>
            <MainStyled>
                {children}
            </MainStyled>
        </>
    )
}
