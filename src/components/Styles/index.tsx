import { createMuiTheme } from '@material-ui/core/styles'

export const Theme = createMuiTheme({
  palette: {
    action: {
      hover: '#666666',
    },
    primary: {
      main: '#000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      light: '#f2f2f2',
      dark: '#e6e6e6',
      contrastText: '#000',
    },
  },
  shadows: {
    1: '0px 10px 20px rgb(0 0 0 / 5%)',
    2: '0px 8px 15pxrgba(0, 0, 0, 0.25)',
  },
  spacing: [0, 2, 8, 16, 24, 32, 48, 64],
  typography: {
    fontFamily: ['Roobert', 'Segoe UI', 'Roboto ligth', 'Roboto', 'Arial'].join(
      ','
    ),
  },
})
