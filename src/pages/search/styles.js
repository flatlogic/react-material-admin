import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  filter: {
    width: 130,
  },
  adjustRightBorderRadius: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  adjustLeftBorderRadius: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));
