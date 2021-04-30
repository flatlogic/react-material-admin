import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  codeContainer: {
    display: props => (props.inline ? "inline-block" : "flex"),
    flexDirection: props => (props.row ? "row" : "column"),
  },
  codeComponent: {
    flexGrow: props => (props.row ? 0 : 1),
    borderRadius: '10px', 
    // '&::-webkit-scrollbar': {
    //   width: '6px'
    // },
    '&::-webkit-scrollbar-track': {
      backgroundColor: '#B9B9B9'
    },
    '&::-webkit-resizer':{
      backgroundColor: '#4A4A4A'
    },
    '&::-webkit-scrollbar': {
      width: '10px', 
      height: '7px'
    }, 
    '&::-webkit-scrollbar-button': {
      display: 'none'
    },
    '&::-webkit-scrollbar-thumb': { 
      height: '50px',
      borderRadius: '36px', 
      // '-webkit-box-shadow': 'inset 0 0 7px rgba(0,0,0,.3)', 
      backgroundColor: '#B9B9B9'
    }, 
    '&::-webkit-scrollbar-track-piece': {
      backgroundColor: 'white'
    }
    
  },
}));
