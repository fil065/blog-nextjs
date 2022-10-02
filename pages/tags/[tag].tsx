import Head from 'next/head'
import Link from 'next/link'
import { StyledLink } from '../../components/sharedstyles'
import { getAllTagsIds, getTagsData } from '../../lib/tags'
import { TitlePost } from '../posts/[id]'

export default function Tag({ tagsData }) {
    return (
        <div>
            <Head>
                <title>{tagsData.tags}</title>
            </Head>
            <h2>{tagsData.title}</h2>

        </div>
    )
}

export async function getStaticPaths() {
  const paths = getAllTagsIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const tagsData = await getTagsData(params.tag)
  return {
    props: {
      tagsData,
    }
  }
}
