import Link from 'next/link'
import styled from 'styled-components'

const TagContainer = styled.div`
  width: fit-content;
  margin-bottom: 1rem;
  & a:nth-last-child(n+2) {
        margin-right: 0.5rem;
    }
`

const TagLink = styled.a`
  width: fit-content;
  margin-bottom: 1rem;
  /* text-decoration: underline; */
  /* color: lime; */
  border: 1px solid black;
  border-radius: 15px;
  padding: 2px 5px;
  font-size: 10px;
  transition: 0.2s;

  &:hover {
  background-color: lime;  
}
`

export default function Tags({ tags }) {
    console.log(tags, "tags")
    return (
        <TagContainer>
            {tags.map((tag, index) =>
                <Link href={`/tag/${tag}`}>
                    <TagLink key={index}>
                        {tag}
                    </TagLink>
                </Link>
            )}
        </TagContainer>
    )
}
