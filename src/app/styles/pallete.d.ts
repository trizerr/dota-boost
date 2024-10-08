import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    purple: Palette['primary'];
  }
  interface PaletteOptions {
    purple?: PaletteColorOptions;
  }
}
