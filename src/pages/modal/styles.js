import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  marginRight: {
    marginRight: '10px'
  },
  marginTop: {
    marginTop: '10px'
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
  codeBack: {
    display: "inline",
    padding: 2,
    backgroundColor: "#f3f3f3",
    color: "#e671b8",
    borderRadius: "2px",
  },
  wrapFix: {
    whiteSpace: 'pre'
  }
}));
