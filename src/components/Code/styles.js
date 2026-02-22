import { makeStyles } from 'styles/mui';

export default makeStyles((theme) => ({
  codeContainer: {
    display: (props) => (props.inline ? 'inline-block' : 'flex'),
    flexDirection: (props) => (props.row ? 'row' : 'column'),
  },
  codeComponent: {
    flexGrow: (props) => (props.row ? 0 : 1),
  },
}));
