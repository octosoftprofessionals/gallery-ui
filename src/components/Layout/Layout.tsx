import React from 'react'
import styled from 'styled-components'

import Navbar from './Navbar'

import './Layout.css'

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>{children}</Main>
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`
  padding: 0 24px;
`

const Main = styled.main`
  min-height: 100vh;
  height: 100%;
  margin-top: 78px;
  margin-bottom: 22px;
`
