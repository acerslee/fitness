import styled from 'styled-components'
import convertToRem from '../../utils/convertToRem'

export const Template = `
  font-family: Interval Sans Pro;
  font-style: normal;
  font-weight: 400;
  color: #3A3C41;
  line-height: ${convertToRem(18)};
`

export const B1Style = styled.p`
  ${Template};
  font-size: ${convertToRem(20)};
`

export const B2Style = styled.p`
  ${Template};
  font-size: ${convertToRem(18)};
`

export const B3Style = styled.p`
  ${Template};
  font-size: ${convertToRem(16)};
`

export const B4Style = styled.p`
  ${Template};
  font-size: ${convertToRem(14)};
`

export const B5Style = styled.p`
  ${Template};
  font-size: ${convertToRem(12)};
`
