import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    backgroundColor: "#f1f1f1",
    margin: theme.spacing(3, 0),
    padding: 10,
  },
  paperItem: {
    textAlign: "center",
    padding: theme.spacing(2),
    color: "#f3f3f3",
  },
  paper: {
    margin: theme.spacing(3),
    padding: 10,
    backgroundColor: "#f3f3f3",
  },
  headBold: {
    fontWeight: 700,
  },
  wrapFix: {
    whiteSpace: "pre",
  },
  paperMargin: {
    margin: 12,
  },
}));
