import styled from 'styled-components'

const FooterStyled = styled.footer`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.background};
`
const Copy = styled.p`
    font-size: 1rem;

    & > span {
    font-size: 1.3rem;

    }
`

export default function Footer() {
    return (
        <>
            <FooterStyled>
                <Copy><span>&copy;</span>LazyDev</Copy>
            </FooterStyled>
        </>
    )
}
