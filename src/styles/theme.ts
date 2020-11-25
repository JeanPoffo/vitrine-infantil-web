import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#efa3ce',
      main: '#ec8dc2',
      dark: '#a56287',
      contrastText: '#fff',
    },
    secondary: {
      light: '#a3dafa',
      main: '#8CD1F9',
      dark: '#6292ae',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
          outline: 0,
        },
        html: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          scrollBehavior: 'smooth',
        },
        'body, #root': {
          height: '100vh',
          backgroundColor: '#f7f9fa',
        },
        'body, input, button': {
          fontFamily: 'Kumbh Sans, sans-serif',
          textRendering: 'optimizelegibility',
        },
      },
    },
  },
});

export default theme;
