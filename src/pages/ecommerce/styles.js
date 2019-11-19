import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  form: {
    flexGrow: 1
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  card: {
    width: "100%"
  },
  media: {
    height: 320,
    padding: theme.spacing(2)
  },
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: "auto"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  denseSelect: {
    "& .MuiOutlinedInput-input": {
      padding: 17
    }
  }
}));
