/* eslint-disable import/prefer-default-export */
import { createTheme } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

import GilroyExtraBold from '../assets/fonts/Gilroy-Extrabold.woff2';
import GilroyMedium from '../assets/fonts/Gilroy-Medium.woff2';

const gilroyExtraBold = {
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 800,
  src: `
    local('Gilroy Extrabold'),
    local('Gilroy-Extrabold'),
    url(${GilroyExtraBold}) format('woff2')
  `,
};
const gilroyMedium = {
  fontFamily: 'Gilroy',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 500,
  src: `
    local('Gilroy Medium'),
    local('Gilroy-Medium'),
    url(${GilroyMedium}) format('woff2')
  `,
};

const breakpoints = createBreakpoints({
  values: {
    xs: 375,
    sm: false,
    md: 600,
    lg: false,
    xl: 1200,
  },
});

const palette = {
  primary: {
    main: '#848484',
    white: '#ffffff',
    black: '#000000',
    another_black: '#1C1C1C',
    modal_black: '#4D4D4D',
    grey: '#E5E5E5',
    light_grey: '#F2F2F2',
    light_red: '#E85C5C',
    blue: '#23A3FF',
  },
  secondary: {
    main: '#D9D9D9',
  },
};

const typography = {
  h3: {
    fontFamily: 'Gilroy',
    fontWeight: '800',
    color: palette.primary.another_black,
    fontSize: '28px',
    lineHeight: '41px',
  },

  p: {
    fontFamily: 'Gilroy',
    fontWeight: '500',
    color: palette.primary.another_black,
    fontSize: '18px',
    lineHeight: '21px',
  },

  header_btn: {
    fontFamily: 'Gilroy',
    fontWeight: '500',
    color: palette.primary.black,
    fontSize: '14px',
    lineHeight: '19px',
  },

  modal_btn: {
    fontFamily: 'Gilroy',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '22px',
  },
};

export const theme = createTheme({
  palette,
  breakpoints,
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [gilroyExtraBold, gilroyMedium],
        'h1, h2, h3, h4, h5, h6, p': {
          margin: 0,
        },
        ul: {
          padding: 0,
        },
        a: {
          padding: 0,
          margin: 0,
        },
        button: {
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
        },
        body: {
          background: '#E5E5E5',
        },
      },
    },

    MuiFormLabel: {
      root: {
        fontFamily: 'Gilroy',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '22px',
      },
    },

    MuiOutlinedInput: {
      root: {
        borderRadius: '10px',
      },
      multiline: {
        padding: '20px',
      },
    },

    MuiInputBase: {
      root: {
        fontFamily: 'Gilroy',
        fontWeight: '500',
        fontSize: '16px',
        lineHeight: '22px',
      },
    },

    // MuiContainer: {
    //   root: {
    //     [breakpoints.up('xs')]: {
    //       padding: '0 12px',
    //     },
    //     [breakpoints.up('sm')]: {
    //       padding: '0 24px',
    //     },
    //     [breakpoints.up('md')]: {
    //       padding: '0 32px',
    //     },
    //     [breakpoints.up('xl')]: {
    //       padding: '0 172px',
    //     },
    //   },
    // },
    // MuiButton: {
    //   contained: {
    //     boxShadow: 'none',
    //     '&:disabled': {
    //       color: palette.primary.gray_500,
    //       backgroundColor: palette.primary.gray_300,
    //     },
    //     '&:hover, &:focus': {
    //       boxShadow: 'none',
    //     },
    //   },
    // },
  },
});
