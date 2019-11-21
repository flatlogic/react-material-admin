import React from "react";

//components
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";
import Code from "../../../Code";

const Libs = () => {
  return (
    <Widget title={"Libs"} inheritHeight disableWidgetMenu>
      <Typography variant={"body1"}>Font Awesome</Typography>
      <Typography variant={"h6"}>
        Library can be used among native{" "}
        <Code inline row>
          Material Icons
        </Code>
      </Typography>
      <Typography variant={"h6"}>Examples:</Typography>
    </Widget>
  );
};

export default Libs;
