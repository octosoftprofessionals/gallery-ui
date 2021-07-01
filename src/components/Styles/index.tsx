import { createMuiTheme } from '@material-ui/core/styles'
import { colors, darkColors, backgroundGradient, boxShadow } from './Colors'

const {
  IslamicGreen,
  DimGray,
  Gray,
  Green,
  Black,
  WhiteSmoke,
  Gainsboro,
  White,
  DarkGray,
  VeryLightGrey,
  Nero,
  Aqua,
  DarkGrey,
} = colors

export const darkTheme = createMuiTheme({
  overrides: {
    MuiPopover: {
      paper: {
        borderRadius: 16,
        backgroundColor: darkColors.DarkGray,
      },
    },
    MuiInputBase: {
      input: {
        background: 'red',
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: 400,
        borderRadius: 16,
        backgroundColor: darkColors.DarkGray,
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
        color: darkColors.WhiteSmoke,
        '&:hover': {
          transform: 'translateY(-2px)',
          backgroundColor: Aqua,
          color: darkColors.White,
        },
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
        color: White,
        backgroundColor: Aqua,
        '&:hover': {
          color: White,
          backgroundColor: Black,
          transform: 'translateY(-2px)',
          boxShadow: boxShadow.boxShadow4,
          borderColor: Aqua,
          border: '1px solid',
        },
        padding: '16px 24px',
      },
      contained: {
        borderRadius: 50,
        margin: '0 2px',
        boxShadow: 'none',
        color: darkColors.WhiteSmoke,
        backgroundColor: darkColors.DarkGray,
        '&:hover': {
          backgroundColor: Black,
          transform: 'translateY(-2px)',
          boxShadow: boxShadow.boxShadow4,
          borderColor: darkColors.DarkGray,
          border: '1px solid',
        },
        padding: '16px 24px',
      },
      containedPrimary: {
        justifyContent: 'flex-start',
      },
      containedSecondary: {
        borderRadius: 10,
        backgroundColor: 'red',
        '&:hover': {
          backgroundColor: Black,
          color: darkColors.WhiteSmoke,
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
    MuiIconButton: {
      colorPrimary: {
        backgroundColor: DarkGrey,
      },
    },
    MuiTypography: {
      colorInherit: {
        color: darkColors.WhiteSmoke,
        '&:hover': { color: darkColors.Aqua },
      },
      colorSecondary: {
        color: darkColors.WhiteSmoke,
      },
      overline: {
        color: darkColors.WhiteSmoke,
        textTransform: 'capitalize',
        fontSize: 14,
        fontWeight: 600,
        '&:hover': { color: darkColors.Aqua },
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
        color: darkColors.WhiteSmoke,
        '&:hover': { color: Aqua },
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
      root: { backgroundColor: 'none' },
      elevation24: { boxShadow: 'none' },
      elevation1: {
        boxShadow: boxShadow.boxShadow6,
        borderRadius: 16,
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: boxShadow.boxShadow7,
        },
      },
      elevation2: {
        boxShadow: boxShadow.boxShadow6,
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
        background: Black,
        padding: '12px 20px',
        color: darkColors.WhiteSmoke,
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
    type: 'dark',
    background: {
      default: darkColors.Black,
      paper: darkColors.DarkGray,
    },
    action: {
      disabledOpacity: [0, 0.2, 0.38],
    },
    buttons: {
      wallet: Aqua,
      selected: Aqua,
    },
    card: {
      footer: darkColors.Black,
      main: darkColors.DarkGray,
      secondary: Black,
    },
    primary: {
      main: darkColors.WhiteSmoke,
      light: darkColors.WhiteSmoke,
      dark: Aqua,
      contrastText: White,
    },
    secondary: {
      main: darkColors.DarkGray,
      light: darkColors.DarkGray,
      dark: Black,
      contrastText: darkColors.White,
    },
    text: { primary: darkColors.WhiteSmoke, secondary: darkColors.WhiteSmoke },
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

export const Theme = createMuiTheme({
  overrides: {
    MuiPopover: {
      paper: {
        borderRadius: 16,
        backgroundColor: White,
      },
    },
    MuiInputBase: {
      input: {
        background: 'red',
      },
    },
    MuiDialog: {
      paperWidthSm: {
        maxWidth: 400,
        borderRadius: 16,
        backgroundColor: White,
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
      containedPrimary: {
        justifyContent: 'flex-start',
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: Black,
          color: White,
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
      colorInherit: {
        color: DimGray,
      },
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
      root: { backgroundColor: 'none' },
      elevation24: { boxShadow: 'none' },
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
    MuiIconButton: {
      colorPrimary: {
        backgroundColor: White,
        boxShadow: boxShadow.boxShadow8,
      },
    },
  },
  shape: { borderRadius: [0, 10, 16, 50] },
  palette: {
    action: {
      disabledOpacity: [0, 0.2, 0.38],
    },
    buttons: {
      wallet: Green,
      selected: Black,
    },
    card: {
      footer: Black,
      secondary: White,
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
      dark: WhiteSmoke,
      // dark: Gainsboro,
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
