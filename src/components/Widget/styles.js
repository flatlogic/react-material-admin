import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  widgetWrapper: {
    display: 'flex',
  },
  inheritHeight: {
    minHeight: 'auto',
  },
  widgetHeader: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(0),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widgetRoot: {
    boxShadow: theme.customShadows.widget,
  },
  widgetBody: {
    height: (props) => (props.fullHeight ? '100%' : 'inherit'),
    padding: theme.spacing(3),
    paddingTop: theme.spacing(1),
  },
  noPadding: {
    padding: 0,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '100%',
  },
  moreButton: {
    margin: -theme.spacing(1),
    padding: 0,
    width: 40,
    height: 40,
    color: theme.palette.text.hint,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      color: 'rgba(255, 255, 255, 0.35)',
    },
  },
  searchIcon: {
    color: 'rgba(0, 0, 0, 0.23)',
  },
  topPart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 24,
  },
  formControl: {
    margin: 0,
    minWidth: 65,
    '& > div > svg': {
      right: '2px',
    },
  },
  inputPosition: {
    transform: 'translate(7px, 10px) scale(1)',
    fontSize: 15,
  },
  selectPadding: {
    padding: 7,
    '& > svg': {
      right: 0,
    },
  },
}));
