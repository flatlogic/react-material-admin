import {makeStyles} from '@material-ui/styles'

export default makeStyles(theme => ({
  filter: {
    width: 130
  },
  flexbox: {
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('sm')]: {
      alignItems: 'flex-end',
    },
  },
  test: {
    [theme.breakpoints.down('md')]: {
      order: 1
    },
  }
}))