import { makeStyles } from 'styles/mui';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: '100vw',
    overflowX: 'hidden',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw - 240px)`,
    minHeight: '100vh',
  },
  contentShift: {
    width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  margin: {
    marginBottom: 24,
  },
  tabPanel: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(2),
  },
  tabsAppBar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    boxShadow: 'none',
    borderRadius: theme.shape.borderRadius,
  },
  tabs: {
    minHeight: 44,
    '& .MuiTabs-indicator': {
      backgroundColor: theme.palette.primary.contrastText,
      height: 3,
    },
  },
  tab: {
    minHeight: 44,
    textTransform: 'none',
    fontWeight: 600,
    color: `${theme.palette.primary.contrastText} !important`,
    opacity: 0.78,
    '&.Mui-selected': {
      color: `${theme.palette.primary.contrastText} !important`,
      opacity: 1,
    },
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));
