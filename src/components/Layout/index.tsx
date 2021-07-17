import React, { useState, useEffect } from 'react'
import { ThemeProvider, styled } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Navbar from './Navbar'
import Footer from './Footer'
import ButtonDM from '../ButtonDM'
import { Theme, darkTheme } from '../Styles'
import './Layout.css'
import { MetamaskAccountType } from '../../types'

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
  marginTop: ({ marginTop }) => (marginTop ? marginTop : Theme.spacing(15)),
  marginBottom: Theme.spacing(7),
  '@media (max-width: 576px)': {
    marginTop: ({ marginTop }) => (marginTop ? marginTop : Theme.spacing(14)),
  },
})

function useLocalState(key, initial) {
  const [themeSelected, setThemeSelected] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(key)
      if (saved !== null) {
        return JSON.parse(saved)
      }
    }
    return initial
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(themeSelected))
  }, [themeSelected])

  return [themeSelected, setThemeSelected]
}

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
}: Props) => {
  const [theme, setTheme] = useLocalState('dark-theme', true)
  const [themeSelected, setThemeSelected] = useState(theme ? darkTheme : Theme)

  useEffect(() => {
    theme ? setThemeSelected(darkTheme) : setThemeSelected(Theme)
  }, [theme])

  const pathname =
    typeof window !== 'undefined' ? window?.location?.pathname : ''

  return (
    <ThemeProvider theme={themeSelected}>
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
        <ButtonDM theme={theme} setTheme={setTheme} />
        <Footer pathname={pathname} />
      </CssBaseline>
    </ThemeProvider>
  )
}

type Props = {
  children: React.ReactNode
  padding?: string
  marginTop?: string
  marginBottom?: string
  backgroundImage?: string
  height?: boolean
  cois?: string
  publicKey?: MetamaskAccountType
  profileImageUrl?: string
  name?: string
}

export default Layout
