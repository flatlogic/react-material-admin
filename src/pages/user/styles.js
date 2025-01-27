import { makeStyles } from '@mui/styles';
import tinycolor from 'tinycolor2';

export default makeStyles((theme) => ({
  icon: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    '& .MuiSvgIcon-root': {
      marginRight: 5,
    },
  },
  stepCompleted: {
    root: {
      color: 'green',
    },
  },
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
  searchIcon: {
    color: 'rgba(0, 0, 0, 0.23)',
  },
  imgWrap: {
    height: 100,
    overflow: 'hidden',
    borderRadius: 8,
    boxShadow: '0 0 10px 0px #ccc',
    marginRight: 20,
    marginBottom: 20,
    maxWidth: 125,
    position: 'relative',
  },
  galleryWrap: {
    display: 'flex',
  },
  uploadLabel: {
    backgroundColor: tinycolor(theme.palette.primary.main),
    color: '#f4f4f4',
    maxWidth: 220,
    display: 'inline-block',
    borderRadius: 8,
    textAlign: 'center',
    padding: '8px 12px',
    margin: '20px 0',
  },
  deleteImageX: {
    fontSize: 20,
    position: 'absolute',
    top: 5,
    left: 5,
    cursor: 'pointer',
    lineHeight: 0.5,
  },
}));
