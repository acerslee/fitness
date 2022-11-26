import styled from 'styled-components'
import convertToRem from '../../utils/convertToRem'

export const Template = `
  font-family: Interval Sans Pro;
  font-style: normal;
  font-weight: 400;
  line-height:${convertToRem(22)};
  color: #52555b;
`

export const H1Style = styled.h1`
  ${Template};
  font-size: ${convertToRem(30)};
`

export const H2Style = styled.h1`
  ${Template};
  font-size: ${convertToRem(28)};
`

export const H3Style = styled.h1`
  ${Template};
  font-size: ${convertToRem(26)};
`

export const H4Style = styled.h1`
  ${Template};
  font-size: ${convertToRem(24)};
`

export const H5Style = styled.h1`
  ${Template};
  font-size: ${convertToRem(22)};
`
