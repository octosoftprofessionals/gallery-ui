import { createMuiTheme } from '@material-ui/core/styles'
import { colors, backgroundGradient, boxShadow } from './Colors'

const {
  IslamicGreen,
  DimGray,
  Gray,
  Black,
  WhiteSmoke,
  Gainsboro,
  White,
  DarkGray,
  VeryLightGrey,
  Nero,
} = colors

export const Theme = createMuiTheme({
  overrides: {
    MuiDialog: {
      paperWidthSm: {
        maxWidth: 400,
        borderRadius: 16,
      },
    },
    MuiBadge: {
      anchorOriginBottomLeftRectangle: {
        backgroundColor: IslamicGreen,
        border: `4px solid ${White}`,
        transform: 'scale(.8) translate(-50%, 50%)',
        left: 4,
        bottom: 9,
      },
    },
    MuiTooltip: {
      tooltip: {
        backgroundColor: Nero,
        borderRadius: 50,
        fontWeight: 600,
        fontSize: 16,
        fontFamily:
          '"Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace;',
      },
    },
    MuiButton: {
      textPrimary: {
        '&:hover': { transform: 'translateY(-2px)', backgroundColor: White },
      },
      textSecondary: {
        borderRadius: 50,
        marginBottom: 12,
        boxShadow: boxShadow.boxShadow1,
        '&:hover': {
          boxShadow: boxShadow.boxShadow4,
          transform: 'translateY(-2px)',
          backgroundColor: White,
        },
      },
      endIcon: {
        color: VeryLightGrey,
        paddingRight: 2,
        '&:hover': {
          color: Black,
        },
      },
      outlined: {
        borderRadius: 50,
        boxShadow: 'none',
        color: Black,
        backgroundColor: White,
        '&:hover': {
          color: White,
          backgroundColor: Black,
          transform: 'translateY(-2px)',
          boxShadow: boxShadow.boxShadow4,
        },
        padding: '16px 24px',
      },
      contained: {
        borderRadius: 50,
        margin: '0 2px',
        boxShadow: 'none',
        color: White,
        backgroundColor: Black,
        '&:hover': {
          backgroundColor: Black,
          transform: 'translateY(-2px)',
          boxShadow: boxShadow.boxShadow4,
        },
        padding: '16px 24px',
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: Black,
          color: White,
          transform: 'translateY(-2px)',
          boxShadow: boxShadow.boxShadow4,
        },
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
      h3: { fontSize: 66, fontWeight: 600 },
      h4: {
        fontSize: 46,
        fontWeight: 600,
      },
      h5: {
        fontSize: 32,
        fontWeight: 600,
      },
      h6: {
        textTransform: 'capitalize',
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
      subtitle2: {
        width: 'fit-content',
        boxSizing: 'border-box',
        WebkitTextFillColor: 'transparent',
        background: backgroundGradient.backgroundGradient1,
        WebkitBackgroundClip: 'text',
        margin: 0,
        fontSize: 16,
        fontWeight: 600,
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
      body2: {
        fontSize: 15,
        fontFamily:
          'Roobert, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        fontWeight: 400,
        lineHeight: 1.7,
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
        boxShadow: boxShadow.boxShadow1,
        borderRadius: 16,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0px 10px 20px rgb(0 0 0 / 10%)',
        },
      },
      elevation2: {
        boxShadow: boxShadow.boxShadow1,
        borderRadius: 16,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: Black,
        marginBottom: 8,
      },
    },
    MuiOutlinedInput: {
      root: { borderRadius: 50 },
      input: {
        background: White,
        padding: '12px 20px',
        color: Nero,
      },
    },
    MuiInputBase: {
      input: {
        borderRadius: 16,
      },
      root: { color: Nero },
    },
  },
  shape: { borderRadius: [0, 10, 16, 50] },
  palette: {
    action: {
      disabledOpacity: [0, 0.2, 0.38],
    },
    primary: {
      main: Black,
      light: DimGray,
      dark: Gray,
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
    30,
    32,
    36,
    48,
    66,
    78,
    96,
    100,
    312,
    500,
  ],
  typography: {
    fontSize: [2, 4, 6, 16, 18, 20, 36, 66, '.85em', '1em', '1.5em', '2.5rem'],
    fontFamily: [
      ['Roobert', 'Segoe UI', 'Roboto ligth', 'Roboto', 'Arial'].join(','),
      [
        'Formular Mono',
        'Consolas',
        'Andale Mono WT',
        'Andale Mono',
        'Lucida Console',
        'Lucida Sans Typewriter',
        'DejaVu Sans Mono',
        'Bitstream Vera Sans Mono',
        'Liberation Mono',
        'Nimbus Mono L',
        'Monaco',
        'Courier New',
        'Courier',
        'monospace',
      ].join(','),
      'Bai Jamjuree',
      'Bai Jamjuree Regular',
    ],
  },
})
