import React from 'react'
import { ThemeProvider, styled } from '@material-ui/core/styles'

import Navbar from './Navbar'

import { Theme } from '../Styles'
import './Layout.css'

const LayoutContainer = styled('div')({ padding: Theme.spacing(0, 8) })

const StyledMain = styled('main')({
  minHeight: `${Theme.spacing(16)}vh`,
  height: `${Theme.spacing(16)}%`,
  marginTop: Theme.spacing(15),
  marginBottom: Theme.spacing(7),
})

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <LayoutContainer>
        <Navbar />
        <StyledMain>{children}</StyledMain>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout
