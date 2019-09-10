import React from "react";

// styles
import useStyles from "./styles";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ children, row }) => {
  const props = { row };
  const classes = useStyles(props);
  return (
    <div className={classes.codeContainer}>
      <SyntaxHighlighter
        className={classes.codeComponent}
        language="javascript"
        style={duotoneLight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
