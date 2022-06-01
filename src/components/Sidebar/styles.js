import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: 85,
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth,
    },
  },
  toolbar: {
    ...theme.mixins.toolbar,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebarList: {
    marginTop: theme.spacing(1),
  },
  mobileBackButton: {
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(3),
    [theme.breakpoints.only('sm')]: {
      marginTop: theme.spacing(0.625),
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  popover: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  fab: {
    width: 36,
    height: 34,
  },
  noBoxShadow: {
    boxShadow: 'none !important',
    marginRight: theme.spacing(1),
  },
  buttonLabel: {
    color: '#fff',
  },
  input: {
    '& .MuiInputBase-input': {
      color: '#fff',
    },
    '& .MuiInput-underline:before': {
      borderBottom: '1px solid rgba(255, 255, 255, .45)',
    },
  },
  chat: {
    width: 45,
    height: 45,
  },
  padding: {
    paddingBottom: theme.spacing(2),
  },
}));
