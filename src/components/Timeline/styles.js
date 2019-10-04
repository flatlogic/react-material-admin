import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  border: {
    position: "relative",
    "&:before": {
      content: "''",
      position: 'absolute',
      border: '1px solid #bdbdbd',
      left: `calc(50% - ${theme.spacing(3)}px)`,
      height: '100%',
      width: 1
    },
  },
}));
