import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
  card: {
    minWidth: "100%",
    backgroundImage: props => `url(${props.card})`,
    backgroundSize: "cover",
    backgroundPosition: "50%",
    color: "#fff",
  },
  cardMedia: {
    minWidth: "100%",
  },
  media: {
    height: "140px",
  },
  starIcon: {
    color: "#ffc247",
  },
  cardActions: {
    padding: theme.spacing(2)
  }
}));
