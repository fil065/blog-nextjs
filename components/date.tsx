import { parseISO, format } from 'date-fns'
import styled from 'styled-components'

const Time = styled.time`
  font-size: 14px;
  font-weight: 400;
  color: gray;
` 

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <Time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</Time>
}
