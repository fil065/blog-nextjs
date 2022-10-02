import styled from 'styled-components'
import { Tag } from '../models/Tag'

const TagCotainer = styled.a`
  color: lime;
  text-decoration: underline;
`

export default function Tag({ tags }) {
    return (
        <>
            {tags.map((tag, index) => (
                <TagCotainer key={index}>
                    {tag}
                </TagCotainer>
            ))}
        </>
    )
}
