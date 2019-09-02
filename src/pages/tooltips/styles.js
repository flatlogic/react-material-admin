import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  button: {
    boxShadow: theme.customShadows.widget,
    color: theme.palette.text.primary,
    marginRight: theme.spacing(1),
    "&:hover": {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
  marginRight: {
    marginRight: theme.spacing(1)
  },
  buttonMargin: {
    margin: theme.spacing(0, 1)
  },
  typography: {
    padding: theme.spacing(2)
  }
}));
