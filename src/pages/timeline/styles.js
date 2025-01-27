import { makeStyles } from '@mui/styles'

export default makeStyles(theme => ({
  icon: {
    fontSize: theme.spacing(2)
  },
  divider: {
    margin: `0px -${theme.spacing(3)}px`
  },
  wrapper: {
    "& > *": { paddingTop: theme.spacing(5) },
    "& > :first-child": {
      paddingTop: 0,
    },
  }
}))