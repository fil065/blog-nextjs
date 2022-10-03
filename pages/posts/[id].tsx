import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import styled from 'styled-components'
import Link from 'next/link'
import Tags from '../../components/tags'

export const PostWrapper = styled.article`

`
export const TitlePost = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  margin: 1rem 0;
`
export const DescriptionPost = styled.div`
  margin-top: 3rem;
  line-height: 1.5;

  p {
    margin: 1rem 0;
  }

  ul {
    padding-left: 2rem;
  }
  
`

export const Back = styled.div`
  margin-top: 2rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
    color: lime;
  }

`
const PostContainer = styled.div`
  max-width: 50rem;
`



export default function Post({ postData, home }) {
  return (
    <PostContainer>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <PostWrapper>
        <Date dateString={postData.date} />
        <TitlePost>{postData.title}</TitlePost>
        <Tags tags={postData.tag}></Tags>
        <DescriptionPost dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </PostWrapper>
      {!home && (
        <Back>
          <Link href="/">
            <a><span>←</span> Back to home</a>
          </Link>
        </Back>
      )}

    </PostContainer>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
