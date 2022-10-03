import styled from 'styled-components'
import Image from 'next/future/image'
import profile from '../public/images/profile.jpg'
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from 'next/link';
import Tags from '../components/tags';

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

const StyledStack = styled.div`
  display: flex;
  justify-content: center;
`
const IconLink = styled.a`
    font-weight: bold;
    transition: 0.2s;
    &:hover
     {
        color: lime;
    }
`


export default function About() {

  const tags = ['JavaScript', 'React', 'TypeScript', 'Redux', 'CSS', 'Styled Components', 'NextJS', 'NodeJS']

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
          <IconLink>
            <FaGithub />
          </IconLink>
        </Link>
        <Link href='https://twitter.com/'>
          <IconLink>
            <FaTwitter />
          </IconLink>
        </Link>
      </IconsWrapper>
      <Title>Fron End Developer</Title>
      <Description>
        Lazy developers hate doing repetitive tasks. They easily get bored and want to end things quickly. One way to achieve this is using automation.
      </Description>
      <StyledStack>
          <Tags tags={tags}/>
      </StyledStack>
      <br/>
    </ContainerAbout>
  )
}

