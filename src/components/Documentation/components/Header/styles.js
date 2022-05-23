import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  menuIcon: {
    marginRight: theme.spacing(2),
  },
  icons: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  appBar: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
    marginLeft: 20,
    marginRight: 20,
  },
  headerButtons: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 'auto',
    },
  },
  fullWidthXs: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));
