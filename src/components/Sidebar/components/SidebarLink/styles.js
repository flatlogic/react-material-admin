import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  link: {
    textDecoration: "none",
    "&:hover, &:focus": {
      backgroundColor: theme.palette.background.light,
      "& > .MuiSvgIcon-root": {
        display: "inline-block"
      }
    },
    "&.Mui-focusVisible": {
      backgroundColor: "transparent"
    }
  },
  linkActive: {
    backgroundColor: theme.palette.background.light
  },
  linkNested: {
    paddingLeft: 0,
    "&:hover, &:focus": {
      backgroundColor: "#FFFFFF"
    }
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary + "99",
    transition: theme.transitions.create("color"),
    display: "flex",
    justifyContent: "center"
  },
  linkIconActive: {
    color: theme.palette.primary.main
  },
  linkText: {
    padding: 0,
    color: theme.palette.text.secondary + "CC",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 16
  },
  linkTextActive: {
    color: theme.palette.text.primary
  },
  linkTextHidden: {
    opacity: 0
  },
  nestedList: {
    paddingLeft: theme.spacing(2) + 30
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: 1,
    backgroundColor: "#D8D8D880"
  },
  expand: {
    transform: "rotate(180deg)"
  },
  expandWrapper: {
    color: theme.palette.text.secondary + "99",
    transition: theme.transitions.create("transform"),
    display: props => (props ? "inline-block" : "none")
  },
  nestedMenu: {
    paddingLeft: 0
  },
  nestedMenuItem: {
    paddingLeft: 0
  }
}));
