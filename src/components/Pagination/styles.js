import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  wrapper: {
    textAlign: "center",
    margin: theme.spacing(3)
  },
  container: {
    display: "inline-flex",
    "& li": {
      listStyle: "none",
      "& a": {
        outline: 0
      }
    },
    alignItems: "center"
  },
  element: {
    padding: `4px ${theme.spacing(1)}px`,
    margin: theme.spacing(1)
  },
  link: {
    color: theme.palette.text.primary
  },
  activeLink: {
    color: theme.palette.primary.main
  },
  activeElement: {
    border: `1px solid ${theme.palette.primary.main}`
  },
  prev: {
    "& a": {
      color: theme.palette.primary.main
    }
  },
  next: {
    "& a": {
      color: theme.palette.primary.main
    }
  }
}));
