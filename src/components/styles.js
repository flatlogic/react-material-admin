import { makeStyles } from '@mui/styles';
import tinycolor from 'tinycolor2';

export default makeStyles((theme) => ({
  layoutContainer: {
    height: 200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    border: '1px dashed',
    borderColor: theme.palette.primary.main,
    position: 'relative',
  },
  layoutText: {
    color: tinycolor(theme.palette.background.light).darken().toHexString(),
  },
  layoutButtonsRow: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  layoutButton: {
    backgroundColor: theme.palette.background.light,
    width: 125,
    height: 50,
    outline: 'none',
    border: 'none',
  },
  layoutButtonActive: {
    backgroundColor: tinycolor(theme.palette.background.light)
      .darken()
      .toHexString(),
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: theme.spacing(2),
  },
  notificationCallButton: {
    color: 'white',
    marginBottom: theme.spacing(1),
    textTransform: 'none',
  },
  codeContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(2),
  },
  codeComponent: {
    flexGrow: 1,
  },
  notificationItem: {
    marginTop: theme.spacing(2),
  },
  toastsContainer: {
    width: 'auto',
    marginTop: theme.spacing(6),
    right: 0,
    background: 'transparent',
    boxShadow: 'none',
    '& div': {
      display: 'flex',
      alignItems: 'center',
      boxShadow: 'none',
      overflow: 'visible',
    },
    '& p': {
      paddingRight: 32,
    },
  },
  progress: {
    visibility: 'hidden',
  },
  notification: {
    display: 'flex',
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none',
    overflow: 'visible',
  },
}));
