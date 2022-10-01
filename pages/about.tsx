import styled from 'styled-components'
import Image from 'next/future/image'
import profile from '../public/images/profile.jpg'
import { Container, StyledLink } from '../components/sharedstyles'
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
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
  border: 2px solid black;
  box-shadow: 0 0 15px lightgray;
  padding: 2px;
`


export const Description = styled.p`
  text-align: left;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.2rem;
  margin: 1rem 0;
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
const Search = styled.input`
    border: 1px solid lightgray;
    border-radius: 15px;
    padding: 5px;
`


export default function About() {
  return (
    <Container>
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
      <Title>Lazy Fry</Title>
      <Description>
        Lazy developers hate doing repetitive tasks. They easily get bored and want to end things quickly. One way to achieve this is using automation. There is some saying “you could have done the task in 6 minutes but instead, you automated it for 6 hours”. I think that’s only partially true. Because that 6 hours you make for automation will save you repetitive 6 minutes. Which if we sum that repetition, it could be more than 6 hours. And if you’re lazy you know which one’s better.
      </Description>

    </Container>
  )
}
