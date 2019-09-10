import {makeStyles} from '@material-ui/styles'

export default makeStyles(theme => ({
  codeContainer: {
    display: "flex",
    flexDirection: props => props.row ? "row" : "column",
    marginTop: theme.spacing(2),
  },
  codeComponent: {
    flexGrow: props => props.row ? 0 : 1,
  },
}))