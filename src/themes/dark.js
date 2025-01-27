import tinycolor from 'tinycolor2';

const primary = '#536DFE';
const secondary = '#EE266D';
const warning = '#E9B55F';
const success = '#63C5B5';
const info = '#AE1ECC';

const lightenRate = 7.5;
const darkenRate = 15;

export default {
  palette: {
    contrastText: '#fff',
    type: 'dark',
    mode: 'dark',
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
      dark: tinycolor(primary).darken(darkenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
      dark: tinycolor(secondary).darken(darkenRate).toHexString(),
      contrastText: '#fff',
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
      dark: tinycolor(warning).darken(darkenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
      dark: tinycolor(success).darken(darkenRate).toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info).lighten(lightenRate).toHexString(),
      dark: tinycolor(info).darken(darkenRate).toHexString(),
    },
    inherit: {
      main: 'inherit',
      light: tinycolor('inherit').lighten('inherit').toHexString(),
      dark: tinycolor('inherit').darken('inherit').toHexString(),
    },
    text: {
      primary: '#fff',
      secondary: '#D6D6D6',
      hint: '#76767B',
    },
    background: {
      default: '#13131A',
      light: '#23232D',
    },
  },
  customShadows: {
    widget:
      '0px 1px 8px rgba(0, 0, 0, 0.103475), 0px 3px 3px rgba(0, 0, 0, 0.0988309), 0px 3px 4px rgba(0, 0, 0, 0.10301)',
  },
};
