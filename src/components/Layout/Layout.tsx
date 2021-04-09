import React from 'react'
import { ThemeProvider, styled } from '@material-ui/core/styles'

import Navbar from './Navbar'

import { Theme } from '../Styles'
import './Layout.css'

const LayoutContainer = styled('div')({ padding: Theme.spacing(0, 4) })

const MyMain = styled('main')({
  minHeight: '100vh',
  height: '100%',
  marginTop: 78,
  marginBottom: Theme.spacing(4) - 2,
})

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <LayoutContainer>
        <Navbar />
        <MyMain>{children}</MyMain>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout
