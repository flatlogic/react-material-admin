import React from "react";

// styles
import useStyles from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const Code = ({ children, row, inline }) => {
  const props = { row, inline };
  const classes = useStyles(props);
  return (
    <div className={classes.codeContainer}>
      <SyntaxHighlighter
        className={classes.codeComponent}
        language="javascript"
        style={duotoneLight}
        customStyle={inline ? { padding: "2px 6px", margin: "-0.5em 0" } : {}}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
