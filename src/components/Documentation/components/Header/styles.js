import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  menuIcon: {
    marginRight: theme.spacing(2)
  },
  icons: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  }
}));
