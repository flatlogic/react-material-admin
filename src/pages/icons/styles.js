import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  titleBold: {
    fontWeight: 600
  },
  iconsBar: {
    borderBottom: "1px solid",
    borderBottomColor: theme.palette.text.hint + "80"
  },
  iconList: {
    paddingTop: theme.spacing(2),
  },
  tab: {
    color: theme.palette.primary.light + "CC"
  },
  materailIcon: {
    display: "flex",
    paddingLeft: `${theme.spacing(4)}px !important`,
    paddingRight: `${theme.spacing(4)}px !important`,
    color: theme.palette.text.secondary,
    fontSize: 24,
    overflowX: "hidden"
  },
  materialIconText: {
    marginLeft: theme.spacing(2),
    fontSize: 14
  },
  iconsContainer: {
    boxShadow: theme.customShadows.widget,
    overflow: "hidden",
    paddingBottom: theme.spacing(2)
  }
}));
