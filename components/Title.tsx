import React from 'react'
import styled from 'styled-components'

const Title = ({children}) => <StyledTitle>{children}</StyledTitle>

export default Title

const StyledTitle = styled.h1`
  color: red;
  font-size: 20px;
`
