import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    '&:hover, &:focus': {
      backgroundColor: theme.palette.background.default,
      '& > .MuiSvgIcon-root': {
        display: 'inline-block',
      },
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'transparent',
    },
  },
  linkActive: {
    backgroundColor: theme.palette.background.default,
  },
  linkNested: {
    paddingLeft: 25,
    '&:hover, &:focus': {
      backgroundColor:
        theme.palette.type === 'dark'
          ? theme.palette.background.light
          : '#FFFFFF',
    },
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    color:
      theme.palette.type === 'dark'
        ? '#616168 !important'
        : theme.palette.text.secondary + '99',
    transition: theme.transitions.create('color'),
    display: 'flex',
    justifyContent: 'center',
  },
  linkIconActive: {
    color: `${theme.palette.primary.main} !important`,
  },
  linkText: {
    padding: 0,
    color:
      theme.palette.type === 'dark'
        ? '#D6D6D6 !important'
        : theme.palette.text.secondary + 'CC',
    transition: theme.transitions.create(['opacity', 'color']),
    fontSize: 14,
  },
  linkTextActive: {
    color: theme.palette.text.primary,
  },
  linkTextHidden: {
    opacity: 0,
  },
  nestedList: {
    paddingLeft: 0,
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: 1,
    backgroundColor:
      theme.palette.type === 'dark' ? 'rgba(151,151,151, .15)' : '#D8D8D880',
  },
  expand: {
    transform: 'rotate(180deg)',
  },
  expandWrapper: {
    color: theme.palette.text.secondary + '99',
    transition: theme.transitions.create('transform'),
    display: (props) => (props ? 'inline-flex' : 'none'),
    marginLeft: 'auto',
  },
  nestedMenu: {
    paddingLeft: 0,
  },
  nestedMenuItem: {
    paddingLeft: 0,
  },
}));
