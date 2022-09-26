import styled from 'styled-components'

const MainStyled = styled.main`
    flex-grow: 1;
    margin: 0 auto;
    max-width: 36rem;
    /* display: flex; */
    /* justify-content: center; */
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
