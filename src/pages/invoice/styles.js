import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  table: {
    "& .MuiTableRow-root:nth-child(odd)": {
      backgroundColor: theme.palette.type === "dark" ? "none" : "#f3f3f3"
    }
  },
  tableFooter: {
    backgroundColor: theme.palette.type === "dark" ? "none" : "#fff !important"
  },
  tableWrapper: {
    marginTop: theme.spacing(3),
    overflowX: "auto",
    width: "100%"
  },
  iconButton: {
    marginRight: theme.spacing(1)
  }
}));
