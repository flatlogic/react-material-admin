import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  border: {
    position: 'relative',
    '&:before': {
      position: 'absolute',
      display: 'block',
      content: "''",
      border: '1px solid #bdbdbd',
      height: '100%',
      margin: 'auto',
      left:'50%'
  }
  }
}))