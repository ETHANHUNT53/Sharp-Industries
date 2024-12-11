// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#005f73',
    },
    secondary: {
      main: '#94d2bd',
    },
    background: {
      default: '#fdfcdc',
      paper: '#ffffff',
    },
    error: {
      main: '#d00000',
    },
    text: {
      primary: '#0a0908',
      secondary: '#495057',
    },
  },
  typography: {
    fontFamily: '"HelveticaNowDisplay", "Lexend", "sans-serif"',
  },
});

export default theme;