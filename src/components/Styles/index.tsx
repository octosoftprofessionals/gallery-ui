import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from './Colors'

const { AshGray, Black, GrayLite, Platinum, White } = colors

export const Theme = createMuiTheme({
  palette: {
    action: {
      hover: AshGray,
    },
    primary: {
      main: Black,
      contrastText: White,
    },
    secondary: {
      main: White,
      light: GrayLite,
      dark: Platinum,
      contrastText: Black,
    },
  },
  shadows: {
    1: '0px 10px 20px rgb(0 0 0 / 5%)',
    2: '0px 8px 15pxrgba(0, 0, 0, 0.25)',
  },
  spacing: [0, 2, 8, 12, 14, 16, 18, 22, 24, 26, 32, 36, 48, 64, 66, 78, 100],
  typography: {
    fontFamily: ['Roobert', 'Segoe UI', 'Roboto ligth', 'Roboto', 'Arial'].join(
      ','
    ),
  },
})
