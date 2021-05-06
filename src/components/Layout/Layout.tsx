import React from 'react'
import { ThemeProvider, styled } from '@material-ui/core/styles'

import Navbar from './Navbar'
import Footer from './Footer'

import { Theme } from '../Styles'
import './Layout.css'

const LocaleContext = React.createContext()

const LayoutContainer = styled('div')({
  padding: ({ padding }) => (padding ? padding : Theme.spacing(0, 8)),
  backgroundColor: ({ backgroundColor }) =>
    backgroundColor ? backgroundColor : Theme.palette.secondary.main,
})

const BackgroundNavBar = styled('div')({
  backgroundImage: ({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : 'transparent',
  height: `${Theme.spacing(12)}vh`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
})

const StyledMain = styled('main')({
  minHeight: `${Theme.spacing(15)}vh`,
  height: `${Theme.spacing(15)}%`,
  marginTop: ({ marginTop }) => (marginTop ? marginTop : Theme.spacing(14)),
  marginBottom: Theme.spacing(7),
})

const Layout = ({
  children,
  padding,
  backgroundColor,
  marginTop,
  backgroundImage,
}) => {
  return (
    <LocaleContext.Provider value={location}>
      <ThemeProvider theme={Theme}>
        <LayoutContainer padding={padding} backgroundColor={backgroundColor}>
          <BackgroundNavBar backgroundImage={backgroundImage}>
            <Navbar pathname={location.pathname} />
          </BackgroundNavBar>
          <StyledMain marginTop={marginTop}>{children}</StyledMain>
        </LayoutContainer>
        <Footer />
      </ThemeProvider>
    </LocaleContext.Provider>
  )
}

export default Layout
