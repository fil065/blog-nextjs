import { Container } from '../components/sharedstyles'
import styled from 'styled-components'
import Link from 'next/link'

const Heading1 = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: left;
  font-weight: 700;
`
const Heading2 = styled.h2`
  font-size: 1.5rem;
`
const Heading3 = styled.h3` 
  font-size: 1.3rem;
`
const StyledList = styled.ul`
  font-size: 1.2rem;
`
const BottomLine = styled.hr`
  border: 1px solid lightgray;
  width: 100%;
  margin-bottom: 2rem;
`
export const StyledLink = styled.a`
    text-decoration: underline;
    color: blue;

    &:hover
     {
        color: lime;
    }
`
export default function SetUp() {
    return (
        <Container>
            <Heading1>Set-Up</Heading1>
            <br />
            <Heading3>Software</Heading3>
            <StyledList>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            VScode
                        </StyledLink>
                    </li>
                </Link>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Notion
                        </StyledLink>
                    </li>
                </Link>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            VPN
                        </StyledLink>
                    </li>
                </Link>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Spotify
                        </StyledLink>
                    </li>
                </Link>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Chrome
                        </StyledLink>
                    </li>
                </Link>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Git
                        </StyledLink>
                    </li>
                </Link>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Linux
                        </StyledLink>
                    </li>
                </Link>

                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Windows
                        </StyledLink>
                    </li>
                </Link>
            </StyledList>
            <BottomLine />
            <Heading3>Hardware</Heading3>
            <StyledList>
                <li>Gaming PC:
                    <StyledList>
                        <li>
                            <Link href={'https://www.amazon.it/'}>
                                <StyledLink>
                                    CPU: ADM Ryzen 5
                                </StyledLink>
                            </Link></li>
                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    Motherboard: Asuz Rog 450
                                </StyledLink>
                            </li>
                        </Link>
                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    RAM: 16gb Crucial Balistik
                                </StyledLink>
                            </li>
                        </Link>

                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    SSD: nvme 1T Samsung Pro
                                </StyledLink>
                            </li>
                        </Link>

                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    Case: Coolermaster
                                </StyledLink>
                            </li>
                        </Link>
                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    PSU: CoolerMaster 650w
                                </StyledLink>
                            </li>
                        </Link>
                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    Keyboard: Ducky ONE 3 SF
                                </StyledLink>
                            </li>
                        </Link>

                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    Mouse: Razer mini
                                </StyledLink>
                            </li>
                        </Link>
                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    Monitor: LG 34 750WN
                                </StyledLink>
                            </li>
                        </Link>
                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    Desk Light: Quantis
                                </StyledLink>
                            </li>
                        </Link>
                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    Mousepad: TeckNet
                                </StyledLink>
                            </li>
                        </Link>
                        <Link href={'https://www.amazon.it/'}>
                            <li>
                                <StyledLink>
                                    HeadSeat: Razer
                                </StyledLink>
                            </li>
                        </Link>
                    </StyledList>
                </li>
            </StyledList >
            <BottomLine />
            <Heading3>VScode Extentions:</Heading3>
            <StyledList>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Git Lens
                        </StyledLink>
                    </li>
                </Link>

                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Live Server
                        </StyledLink>
                    </li>
                </Link>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Material Icon Theme
                        </StyledLink>
                    </li>
                </Link>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            vscode-styled-components
                        </StyledLink>
                    </li>
                </Link>
            </StyledList>
            <BottomLine />
            <Heading3>Chrome Extentions:</Heading3>
            <StyledList>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Dark Reader
                        </StyledLink>
                    </li>
                </Link>
                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Translate
                        </StyledLink>
                    </li>
                </Link>

                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            JSON formatter
                        </StyledLink>
                    </li>
                </Link>

                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Screen shot
                        </StyledLink>
                    </li>
                </Link>

                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            Redux Tool Kit
                        </StyledLink>
                    </li>
                </Link>

                <Link href={'https://www.amazon.it/'}>
                    <li>
                        <StyledLink>
                            React
                        </StyledLink>
                    </li>
                </Link>

            </StyledList>
        </Container >
    )
}

