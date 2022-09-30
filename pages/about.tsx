import styled from 'styled-components'
import Image from 'next/future/image'
import profile from '../public/images/profile.jpg'
import { Container } from '../components/sharedstyles'

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
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

export const IconsWrapper = styled.p`

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
      <Title>Lazy Dev</Title>
      <Description>
        Lazy developers hate doing repetitive tasks. They easily get bored and want to end things quickly. One way to achieve this is using automation. There is some saying “you could have done the task in 6 minutes but instead, you automated it for 6 hours”. I think that’s only partially true. Because that 6 hours you make for automation will save you repetitive 6 minutes. Which if we sum that repetition, it could be more than 6 hours. And if you’re lazy you know which one’s better.
      </Description>
    </Container>
  )
}
