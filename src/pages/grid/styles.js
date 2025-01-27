import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  paperItem: {
    textAlign: "center",
    padding: theme.spacing(2),
    color: "#f3f3f3"
  },
  headBold: {
    fontWeight: 700
  },
  wrapFix: {
    whiteSpace: "pre"
  },
  paperMargin: {
    margin: 12
  },
  fullHeightBody: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  card: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column"
  }
}));
