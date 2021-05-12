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

const BackgroundNavBar = styled('div')({
  backgroundImage: ({ backgroundImage }) =>
    backgroundImage ? `url(${backgroundImage})` : 'transparent',
  height: ({ height }) => (height ? `${Theme.spacing(13)}vh` : ''),
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: 9999,
})

const StyledMain = styled('main')({
  minHeight: `${Theme.spacing(15)}vh`,
  height: `${Theme.spacing(15)}%`,
  marginTop: ({ marginTop }) => (marginTop ? marginTop : Theme.spacing(16)),
  marginBottom: Theme.spacing(7),
})

const Layout = ({
  children,
  padding,
  backgroundColor,
  marginTop,
  backgroundImage,
  height,
}) => {
  const pathname =
    typeof window !== 'undefined' ? window?.location?.pathname : ''

  return (
    <ThemeProvider theme={Theme}>
      <LayoutContainer padding={padding} backgroundColor={backgroundColor}>
        <BackgroundNavBar backgroundImage={backgroundImage} height={height}>
          <Navbar pathname={pathname} />
        </BackgroundNavBar>
        <StyledMain marginTop={marginTop}>{children}</StyledMain>
      </LayoutContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
