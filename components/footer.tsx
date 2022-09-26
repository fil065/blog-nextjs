import styled from 'styled-components'

const FooterStyled = styled.footer`
    width: 100%;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: lightgray;

`
const Copy = styled.p`

`

export default function Footer() {
    return (
        <>
            <FooterStyled>
                <Copy>&copy;LazyDev</Copy>
            </FooterStyled>
        </>
    )
}
