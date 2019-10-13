import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  table: {
    "& .MuiTableRow-root:nth-child(odd)": {
      backgroundColor: "#f3f3f3",
    },
  },
  tableFooter: {
    backgroundColor: "#fff !important",
  },
  tableWrapper: {
    marginTop: theme.spacing(3),
    overflowX: "auto",
    width: '100%'
  },
  iconButton: {
      marginRight: theme.spacing(1)
  }
}));