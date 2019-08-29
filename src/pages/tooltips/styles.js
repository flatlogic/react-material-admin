import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  button: {
    boxShadow: theme.customShadows.widget,
    color: theme.palette.text.primary,
    marginRight: theme.spacing(2),
    "&:hover": {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
}));
