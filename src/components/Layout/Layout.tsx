import React from 'react'
import { ThemeProvider, styled } from '@material-ui/core/styles'

import Navbar from './Navbar'
import Footer from './Footer'

import { Theme } from '../Styles'
import './Layout.css'

const LayoutContainer = styled('div')({
  padding: ({ padding }) => (padding ? padding : Theme.spacing(0, 8)),
  backgroundColor: ({ backgroundColor }) =>
    backgroundColor ? backgroundColor : Theme.palette.secondary.main,
})

const StyledMain = styled('main')({
  minHeight: `${Theme.spacing(15)}vh`,
  height: `${Theme.spacing(15)}%`,
  marginTop: ({ marginTop }) => (marginTop ? marginTop : Theme.spacing(14)),
  marginBottom: Theme.spacing(7),
})

const Layout = ({ children, padding, backgroundColor, marginTop }) => {
  return (
    <ThemeProvider theme={Theme}>
      <LayoutContainer padding={padding} backgroundColor={backgroundColor}>
        <Navbar />
        <StyledMain marginTop={marginTop}>{children}</StyledMain>
      </LayoutContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
