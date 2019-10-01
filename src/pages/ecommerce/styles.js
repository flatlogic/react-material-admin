import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  table: {
    minWidth: 500,
    "& .MuiTableRow-root:nth-child(odd)": {
      backgroundColor: "#f3f3f3",
    },
  },
  tableFooter: {
    backgroundColor: "#fff !important",
  },
  tableWrapper: {
    marginTop: theme.spacing(1),
    overflowX: "auto",
  },
  form: {
    minWidth: 120,
  },
}));
