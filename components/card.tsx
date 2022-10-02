import styled from 'styled-components'
import Link from 'next/link'
import Date from '../components/date'
import Tag from './tags'

export const CardPostWrapper = styled.article`
  padding: 1rem;
  border: 1px solid lightgray;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    border: 1px solid lightgray;
    box-shadow: 2px 2px 5px lightgray;
  }
`

export const TitleCardPost = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    color: lime;
  }
`

export default function Card() {
  return (
    <CardPostWrapper key={id}>
    <Link href={`/posts/${id}`}>
      <TitleCardPost>{title}</TitleCardPost>
    </Link>
    <Date dateString={date} />
    <Link href={`/tag/${tag}`}>
      <a key={tag}>{tag}</a>
    </Link>
  </CardPostWrapper>
)
}
