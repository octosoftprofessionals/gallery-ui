import React, { useState } from 'react'
import { ThemeProvider, styled } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Navbar from './Navbar'
import Footer from './Footer'

import { Theme, darkTheme } from '../Styles'
import './Layout.css'

const LayoutContainer = styled('div')({
  padding: ({ padding }) => (padding ? padding : Theme.spacing(0, 8)),
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
  marginTop,
  backgroundImage,
  height,
  cois,
  publicKey,
  profileImageUrl,
  name,
}) => {
  const [theme, setTheme] = useState(darkTheme)
  const pathname =
    typeof window !== 'undefined' ? window?.location?.pathname : ''

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <LayoutContainer padding={padding}>
          <BackgroundNavBar backgroundImage={backgroundImage} height={height}>
            <Navbar
              pathname={pathname}
              cois={cois}
              publicKey={publicKey}
              profileImageUrl={profileImageUrl}
              name={name}
            />
          </BackgroundNavBar>
          <StyledMain marginTop={marginTop}>{children}</StyledMain>
        </LayoutContainer>
        <Footer pathname={pathname} />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default Layout
