import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from './Colors'

const {
  DimGray,
  Gray,
  Black,
  WhiteSmoke,
  Gainsboro,
  White,
  DarkGray,
  VeryLightGrey,
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
        color: DarkGray,
        textTransform: 'capitalize',
        fontSize: 14,
        fontWeight: 600,
        '&:hover': { color: DimGray },
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
      h5: {
        fontSize: 24,
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: 16,
        fontWeight: 600,
        marginLeft: 8,
        fontFamily:
          '"Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;',
      },
      caption: {
        fontSize: 18,
        fontWeight: 600,
        textTransform: 'none',
        color: Gray,
      },
      body1: {
        fontSize: 18,
        fontWeight: 600,
        textTransform: 'none',
        cursor: 'pointer',
        color: DimGray,
        '&:hover': { color: Black },
      },
    },
    MuiDrawer: {
      paperAnchorRight: {
        backgroundColor: Black,
        color: White,
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: '0px 10px 20px rgb(0 0 0 / 5%);',
        borderRadius: 16,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0px 10px 20px rgb(0 0 0 / 10%)',
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: Black,
        marginBottom: 8,
      },
    },
  },
  shape: { borderRadius: [0, 10, 16] },
  palette: {
    action: {
      hover: WhiteSmoke,
    },
    primary: {
      main: Black,
      light: DimGray,
      contrastText: White,
    },
    secondary: {
      main: White,
      light: WhiteSmoke,
      dark: Gainsboro,
      contrastText: Black,
    },
    text: { primary: Gray, secondary: VeryLightGrey },
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
    66,
    78,
    96,
    100,
  ],
  typography: {
    fontSize: [2, 4, 6, 18, 20, 66, '.85em', '1em'],
    fontFamily: ['Roobert', 'Segoe UI', 'Roboto ligth', 'Roboto', 'Arial'].join(
      ','
    ),
  },
})
