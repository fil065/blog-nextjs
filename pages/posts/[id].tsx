import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import styled from 'styled-components'
import Link from 'next/link'

export const PostWrapper = styled.article`

`
export const TitlePost = styled.h2`
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 1rem;
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


export default function Post({ postData, home }) {
  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <PostWrapper>
        <TitlePost>{postData.title}</TitlePost>
        <Date dateString={postData.date} />
        <DescriptionPost dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </PostWrapper>
      {!home && (
        <Back>
          <Link href="/">
            <a><span>←</span> Back to home</a>
          </Link>
        </Back>
      )}

    </div>
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
