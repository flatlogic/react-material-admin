import React from "react";

//components
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";
import Code from "../../../Code";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Icon = <FontAwesomeIcon icon={faCoffee} />;

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
      <Icon />
    </Widget>
  );
};

export default Libs;
