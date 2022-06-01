import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  marginRight: {
    marginRight: theme.spacing(3)
  },
  marginTop: {
    marginTop: theme.spacing(3)
  },
  paperItem: {
    backgroundColor: theme.palette.primary.light,
    textAlign: "center",
    padding: theme.spacing(2),
    color: "#f3f3f3",
  },
  paper: {
    margin: theme.spacing(3),
    backgroundColor: "#f3f3f3",
  },
  wrapFix: {
    whiteSpace: 'pre'
  },
  paperMargin: {
    margin: 12,
  },
}));
