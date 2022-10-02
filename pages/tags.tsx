import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../components/sharedstyles'
import styled from 'styled-components'


const Heading1 = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: left;
  font-weight: 700;
`
export default function Tags({ allPostsData }) {
  console.log(allPostsData, 'allPostsData')
  return (
    <Container>
      <Head>
      </Head>
      <Heading1>Tags</Heading1>
    </Container>
  )
}
