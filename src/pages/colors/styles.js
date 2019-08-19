import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  codeBack: {
    display: "inline",
    padding: 2,
    backgroundColor: "#f3f3f3",
    color: "#e671b8",
    borderRadius: '2px'
  },
  button: {
    marginRight: 5
  },
  dashedBorder: {
    border: "1px dashed",
    borderColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
}));
