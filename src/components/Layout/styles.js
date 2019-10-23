import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    width: `calc(100vw - 240px)`,
    minHeight: "100vh",
  },
  contentShift: {
    width: `calc(100vw - ${240 + theme.spacing(6)}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  fakeToolbar: {
    ...theme.mixins.toolbar,
  },
  link: {
    marginRight: theme.spacing(2),
  },
  noneMargin: {
    margin: 0,
  },
  primaryRadio: {
    color: "#536DFE",
    "&.MuiRadio-colorSecondary.Mui-checked": {
      color: "#536DFE",
    },
  },
  secondaryRadio: {
    color: "#FF5C93",
    "&.MuiRadio-colorSecondary.Mui-checked": {
      color: "#FF5C93",
    },
  },
}));
