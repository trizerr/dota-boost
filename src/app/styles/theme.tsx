'use client';
import { createTheme } from '@mui/material';
import CheckIcon from '@/app/assets/check.svg';

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
  spacing: 1,
  typography: {
    allVariants: {
      lineHeight: 1, // Relative to font size
    },
    fontFamily: 'var(--font-anonymous-pro), monospace',
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          backgroundColor: '#161616',
          paddingTop: 14,
          paddingBottom: 14,
          paddingRight: 24,
          paddingLeft: 24,
          textDecoration: 'none !important',
          borderBottom: '0px !important',
          borderRadius: 15,
          fontSize: 30,
          '&:hover': {
            textDecoration: 'none !important',
            borderBottom: 0,
          },
          '&:focus': {
            textDecoration: 'none !important',
          },
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        component: 'button',
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiCheckbox: {
      defaultProps: {
        checkedIcon: <CheckIcon />,
        icon: <></>,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#242424',
          padding: 0,
          borderWidth: 0,
          borderRadius: '13px',
          width: 65,
          height: 65,
          flexShrink: 0,
          //hover
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          backgroundColor: '#693DC8',
          paddingTop: 28,
          paddingBottom: 28,
          fontWeight: 'bold',
          borderRadius: '30px',
          fontSize: 48,
          '&:hover': {
            backgroundColor: '#655384',
          },
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
