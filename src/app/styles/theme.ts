import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#000000',
      light: '#242424',
      dark: '#161616',
    },
    purple: {
      main: '#655384',
      dark: '#693DC8',
    },
  },
  typography: { fontFamily: 'var(--font-anonymous-pro), monospace' },
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     @font-face {
    //       font-family: var(-font-anonymous-pro);
    //       font-style: monospace;
    //      }
    //   `,
    // },
    // MuiCssBaseline: {
    //   styleOverrides: {
    //     fontFamily: '"Anonymous Pro", monospace',
    //   },
    // },
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#693DC8',
        },
        thumb: {
          color: '#693DC8',
        },
        track: {
          color: '#693DC8',
        },
        rail: {
          color: '#693DC8',
        },
      },
    },
  },
});

export default theme;
