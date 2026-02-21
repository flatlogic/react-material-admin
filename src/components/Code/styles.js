import { makeStyles } from 'styles/muiCompat';

export default makeStyles((theme) => ({
  codeContainer: {
    display: (props) => (props.inline ? 'inline-block' : 'flex'),
    flexDirection: (props) => (props.row ? 'row' : 'column'),
  },
  codeComponent: {
    flexGrow: (props) => (props.row ? 0 : 1),
  },
}));
