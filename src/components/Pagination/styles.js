import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  wrapper: {
    textAlign: 'center',
    margin: theme.spacing(3)
  },
  container: {
    display: 'inline-flex',
    '& li': {
      listStyle: 'none'
    },
    alignItems: 'center'
  },
  element: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    borderRadius: 2,
    backgroundColor: theme.palette.primary.main
  },
  link: {
    color: '#fff'
  }
}))