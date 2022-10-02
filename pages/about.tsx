import styled from 'styled-components'
import Image from 'next/future/image'
import profile from '../public/images/profile.jpg'
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

export const ContainerAbout = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
  max-width: 50rem;
`

export const Title = styled.h3`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem;
  text-align: center;
`

export const ImgWrapper = styled.span`
  padding: 1rem;
  margin: 0 auto;
`

const StyledImage = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.color};
  box-shadow: 0 0 15px ${({ theme }) => theme.shadow};
  padding: 2px;
`


export const Description = styled.p`
  text-align: left;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.2rem;
  margin: 1rem 0;
  margin-bottom: 4rem;
`

export const IconsWrapper = styled.div`
  text-align: center;
  font-size: 1.7rem;

  & > :hover {
    color: lime;
  }

  & > a:nth-last-child(n+2) {
        margin-right: 0.3rem;
  }

`

const Heading2 = styled.h2`
  font-size: 1.5rem;
`

const StyledStack = styled.ul`
  font-size: 1.2rem;
`
const StyledLink = styled.a`
    font-weight: bold;
    transition: 0.2s;
    &:hover
     {
        color: lime;
    }
`


export default function About() {
  return (
    <ContainerAbout>
      <ImgWrapper>
        <StyledImage
          src={profile}
          width={150}
          height={150}
          alt="Picture of the author"
          placeholder="blur"
        />
      </ImgWrapper>
      <IconsWrapper>
        <Link href='https://github.com/fil065'>
          <StyledLink>
            <FaGithub />
          </StyledLink>
        </Link>
        <Link href='https://twitter.com/'>
          <StyledLink>
            <FaTwitter />
          </StyledLink>
        </Link>
      </IconsWrapper>
      <Title>Fron End Developer</Title>
      <Description>
        Lazy developers hate doing repetitive tasks. They easily get bored and want to end things quickly. One way to achieve this is using automation.
      </Description>
      <Heading2>Tech Stack</Heading2>
      <StyledStack>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Redux</li>
        <li>CSS</li>
        <li>Styled Components</li>
        <li>Next JS</li>
        <li>GraphQL</li>
        <li>Node JS</li>
      </StyledStack>
      <br/>
    </ContainerAbout>
  )
}
