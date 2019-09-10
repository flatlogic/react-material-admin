import React from "react";

// styles
import useStyles from "./styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";


const Code = ({ children, row }) => {
  const props = {row}
  const classes = useStyles(props);
  return (
    <div className={classes.codeContainer}>
      <SyntaxHighlighter
        className={classes.codeComponent}
        language="javascript"
        style={docco}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
