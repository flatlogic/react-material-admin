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
    flexGrow: 1,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  card: {
    width: "100%",
  },
  media: {
    height: 320,
    padding: theme.spacing(2)
  },
}));
