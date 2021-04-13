import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from './Colors'

const {
  AshGray,
  GrayStrong,
  Black,
  GrayLite,
  Platinum,
  White,
  GrayText,
} = colors

export const Theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: 50,
        margin: '0 2px',
        boxShadow: 'none',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 'rgb(0 0 0 / 25%) 0px 8px 15px',
        },
        padding: '16px 24px',
      },
      text: {
        boxShadow: 'none',
        borderRadius: 15,
        margin: '0 2px',
        padding: '10px 20px',
      },
    },
    MuiTypography: {
      overline: {
        color: GrayText,
        textTransform: 'capitalize',
        fontSize: 14,
        fontWeight: 600,
        '&:hover': { color: AshGray },
      },
      button: {
        margin: 0,
        padding: 0,
        fontSize: 18,
        fontWeight: 600,
        textTransform: 'none',
      },
      h4: {
        fontSize: 46,
        fontWeight: 600,
      },
      caption: {
        fontSize: 18,
        fontWeight: 600,
        textTransform: 'none',
        color: GrayStrong,
      },
    },
    MuiDrawer: {
      paperAnchorRight: {
        backgroundColor: Black,
        color: White,
      },
    },
  },
  shape: { borderRadius: [0, 10] },
  palette: {
    action: {
      hover: GrayLite,
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
    fontSize: [2, 4, 6, 18, 20, 66],
    fontFamily: ['Roobert', 'Segoe UI', 'Roboto ligth', 'Roboto', 'Arial'].join(
      ','
    ),
  },
})
