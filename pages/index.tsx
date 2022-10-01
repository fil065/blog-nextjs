import Head from 'next/head'
import Link from 'next/link'
import {Container } from '../components/sharedstyles'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import styled from 'styled-components'


const Heading2 = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: left;
  font-weight: 700;
`
const CardPostWrapper = styled.article`
  padding: 1rem;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    border: 1px solid lightgray;
    box-shadow: 2px 2px 5px lightgray;
  }
`

const TitleCardPost = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    color: lime;
  }

`

export default function Home({ allPostsData }) {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading2>Blog</Heading2>
      <div>
        {allPostsData.map(({ id, date, title }) => (
          <CardPostWrapper>
            <Link href={`/posts/${id}`}>
              <TitleCardPost>{title}</TitleCardPost>
            </Link>
            <Date dateString={date} />
          </CardPostWrapper>
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
