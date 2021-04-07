import React from 'react'
import styled from 'styled-components'

const Sectional = ({
  children,
  className = '',
  style,
  innerStyle = {},
  ...props
}) => (
  <Container className={className} {...props}>
    {children}
  </Container>
)

export default Sectional

const Container = styled.div`
  padding: 16px 16px 11px;
  border-bottom: solid 1px #ffecc3;
  color: black;
  display: flex;
  margin: auto;

  a {
    text-decoration: none;
    color: black;
  }
`
