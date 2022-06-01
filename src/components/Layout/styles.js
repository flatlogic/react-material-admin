import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  content: {
    position: 'relative',
    flexGrow: 1,
    margin: '0px 35px 0px 35px',
    width: `calc(100vw - 240px)`,
    minHeight: '100vh',
    paddingBottom: 70,
  },
  contentShift: {
    width: `calc(100vw - (240px + ${theme.spacing(8)}))`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
    marginTop: 25,
  },
  link: {
    marginRight: `16px !important`,
    textDecoration: 'none',
  },
  defaultRadio: {
    color: '#536DFE',
    '&.MuiRadio-colorSecondary.Mui-checked': {
      color: '#536DFE',
    },
  },
  successRadio: {
    color: '#23a075',
    '&.MuiRadio-colorSecondary.Mui-checked': {
      color: '#23a075',
    },
  },
  secondaryRadio: {
    color: '#FF5C93',
    '&.MuiRadio-colorSecondary.Mui-checked': {
      color: '#FF5C93',
    },
  },
  warningRadio: {
    color: '#FFC260',
    '&.MuiRadio-colorSecondary.Mui-checked': {
      color: '#FFC260',
    },
  },
  infoRadio: {
    color: '#9013FE',
    '&.MuiRadio-colorSecondary.Mui-checked': {
      color: '#9013FE',
    },
  },
  button: {
    boxShadow: theme.customShadows.widget,
    textTransform: 'none',
    '&:active': {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
  ecommerceIcon: {
    color: '#6E6E6E',
  },
  calendarIcon: {
    color: theme.palette.primary.main,
    marginRight: 14,
  },
  margin: {
    marginBottom: 24,
  },
  changeThemeFab: {
    position: 'fixed',
    top: theme.spacing(15),
    right: 0,
    zIndex: 1,
    borderRadius: 0,
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  },
  navPadding: {
    paddingTop: `${theme.spacing(1)}px !important`,
    paddingBottom: `6px !important`,
  },
  date: {
    marginRight: 38,
    color: theme.palette.type === 'dark' ? '#D6D6D6' : '#4A494A',
  },
}));
