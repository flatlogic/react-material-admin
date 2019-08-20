import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    backgroundColor: "#f1f1f1",
    margin: theme.spacing(3, 0),
    padding: 10,
  },
  codeBack: {
    display: "inline",
    padding: 2,
    backgroundColor: "#f3f3f3",
    color: "#e671b8",
    borderRadius: "2px",
  },
  paperItem: {
    backgroundColor: theme.palette.primary.light,
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
}));
