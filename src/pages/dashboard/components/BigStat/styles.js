import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  bottomStatsContainer: {
    display: "flex",
    justifyContent: "space-between",
    margin: theme.spacing(1) * -2,
    marginTop: theme.spacing(1),
  },
  statCell: {
    padding: theme.spacing(2),
  },
  totalValueContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  totalValue: {
    display: "flex",
    alignItems: "baseline",
  },
  profitArrow: {
    transform: "rotate(-45deg)",
    fill: theme.palette.success.main,
  },
  profitArrowDanger: {
    transform: "rotate(45deg)",
    fill: theme.palette.secondary.main,
  },
  selectInput: {
    padding: 10,
    paddingRight: 25,
    "&:focus": {
      backgroundColor: "white",
    },
  },
}));