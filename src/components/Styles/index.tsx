import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from './Colors'

const { AshGray, Black, GrayLite, Platinum, White, GrayText } = colors

export const Theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      overline: {
        color: GrayText,
        textTransform: 'capitalize',
        fontSize: 14,
        fontWeight: 600,
        '&:hover': { color: AshGray },
      },
    },
  },
  palette: {
    action: {
      hover: AshGray,
    },
    primary: {
      main: Black,
      light: AshGray,
      contrastText: White,
    },
    secondary: {
      main: White,
      light: GrayLite,
      dark: Platinum,
      contrastText: Black,
    },
  },
  spacing: [
    0,
    2,
    8,
    12,
    14,
    16,
    18,
    20,
    22,
    24,
    26,
    32,
    36,
    48,
    64,
    66,
    78,
    100,
  ],
  typography: {
    fontFamily: ['Roobert', 'Segoe UI', 'Roboto ligth', 'Roboto', 'Arial'].join(
      ','
    ),
  },
})
