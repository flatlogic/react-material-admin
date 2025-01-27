import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  logotype: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(12),
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logotypeText: {
    fontWeight: 500,
    color: 'white',
    marginLeft: theme.spacing(2),
  },
  logotypeIcon: {
    width: 70,
    marginRight: theme.spacing(2),
  },
  paperRoot: {
    boxShadow: theme.customShadows.widgetDark,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
    maxWidth: 404,
  },
  textRow: {
    marginBottom: theme.spacing(10),
    textAlign: 'center',
  },
  errorCode: {
    fontSize: 148,
    fontWeight: 600,
  },
  safetyText: {
    fontWeight: 300,
    color: theme.palette.text.hint,
  },
  backButton: {
    textTransform: 'none',
    fontSize: 22,
  },
}));
