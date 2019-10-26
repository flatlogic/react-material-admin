import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  border: {
    position: "relative",
    "&:before": {
      content: "''",
      position: "absolute",
      border: "1px solid #bdbdbd",
      left: "50%",
      height: "calc(100% + 40px)",
      width: 1,
    },
  },
  circle: {
    border: 'rgba(255,255,255,.2) 5px solid',
  },
}));
