import defaultTheme from './default';
import successTheme from './success';
import secondaryTheme from './secondary';
import darkTheme from './dark';

import { createTheme } from '@mui/material/styles';

const overrides = {
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.64rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.285rem',
    },
    h6: {
      fontSize: '1.142rem',
    },
  },
  overrides: {
    MuiCard: {
      root: {
        boxShadow:
          '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
      },
    },
    MUIDataTable: {
      paper: {
        boxShadow:
          '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: '#4A4A4A1A',
      },
    },
    MuiMenu: {
      paper: {
        boxShadow:
          '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
      },
    },
    MuiSelect: {
      icon: {
        color: '#B9B9B9',
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: '#F3F5FF !important',
          '&:focus': {
            backgroundColor: '#F3F5FF',
          },
        },
      },
      button: {
        '&:hover, &:focus': {
          backgroundColor: '#F3F5FF',
        },
      },
    },
    MuiTouchRipple: {
      child: {
        backgroundColor: 'white',
      },
    },
    MuiTableRow: {
      root: {
        height: 56,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: '1px solid rgba(224, 224, 224, .5)',
        padding: '14px 40px 14px 24px',
      },
      head: {
        fontSize: '0.95rem',
      },
      body: {
        fontSize: '0.95rem',
      },
      paddingCheckbox: {
        padding: '0 0 0 15px',
      },
    },
  },
};

const darkModeOverrides = {
  components: {
    MuiCssBaseline: {
      '@global': {
        // '*': {
        //     'scrollbar-width': 'thin',
        // },
        '*::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#12121A',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#23232D',
          boxShadow:
            '0px 1px 8px rgba(0, 0, 0, 0.103475), 0px 3px 3px rgba(0, 0, 0, 0.0988309), 0px 3px 4px rgba(0, 0, 0, 0.10301) !important',
          '&::-webkit-scrollbar': {
            width: '0.4em',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#12121A',
          },
        },
      },
    },
    MuiAppBar: {
      root: {
        backgroundColor: '#23232D !important',
      },
    },
    MuiButton: {
      root: {
        boxShadow: 'none !important',
      },
    },
    typography: {
      root: {
        color: 'white !important',
      },
    },
    MuiCheckbox: {
      root: {
        color: '#76767B',
      },
    },
    MuiTable: {
      root: {
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#12121A',
        },
      },
    },
    MuiTableCell: {
      head: {
        color: '#76767B',
      },
    },
    MuiTableBody: {
      root: {
        '&::-webkit-scrollbar': {
          width: '0.4em',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#12121A',
        },
      },
    },
    MuiTableSortLabel: {
      icon: {
        color: '#76767B',
      },
      active: {
        color: '#76767B !important',
      },
      iconDirectionDesc: {
        color: '#76767B !important',
      },
      iconDirectionAsc: {
        color: '#76767B !important',
      },
    },
    MuiTablePagination: {
      toolbar: {
        color: '#76767B',
      },
      selectIcon: {
        color: '#76767B',
      },
    },
  },
};

export default {
  default: createTheme({ ...defaultTheme, ...overrides }),
  secondary: createTheme({ ...secondaryTheme, ...overrides }),
  success: createTheme({ ...successTheme, ...overrides }),
  dark: createTheme({ ...darkTheme, ...overrides, ...darkModeOverrides }),
};
