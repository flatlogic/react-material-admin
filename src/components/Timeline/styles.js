import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  border: {
    "&:first-child > *": {
      marginTop: 0,
    },
    "& > *": { marginTop: theme.spacing(5) },
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      border: "1px solid #bdbdbd",
      left: "50%",
      height: "100%",
      width: 1,
    },
  },
  circle: {
    border: 'rgba(255,255,255,.2) 5px solid',
  },
}));
