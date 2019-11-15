import React from "react";

//components
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";
import Code from "../../../Code";

const TypographyPage = () => {
  return (
    <Widget inheritHeight disableWidgetMenu>
      <Typography variant={"body1"}>
        Typography component is the wrapper of native{" "}
        <Code row inline>
          Material-UI
        </Code>{" "}
        component.
      </Typography>
      <Typography variant={"body1"}>
        We'he override Typography screen size in{" "}
        <Code row inline>
          src/themes/index.js
        </Code>
      </Typography>
      <Typography variant={"body1"}>
        Also we attached prop called{" "}
        <Code row inline>
          size
        </Code>{" "}
        with the values{" "}
        <Code inline row>
          sm, md, xl, xxl
        </Code>
      </Typography>
    </Widget>
  );
};

export default TypographyPage;
