import React from "react";

//components
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";
import Code from "../../../Code";

const TypographyPage = () => {
  return (
    <Widget title={"Typography"} inheritHeight disableWidgetMenu>
      <Typography variant={"body1"}>
        Typography component is the wrapper of native{" "}
        <Code row inline>
          Material-UI
        </Code>{" "}
        typography component. We'he override Typography screen size in{" "}
        <Code row inline>
          src/themes/index.js
        </Code>
        Also we attached prop called{" "}
        <Code row inline>
          size
        </Code>{" "}
        with the values{" "}
        <Code inline row>
          sm, md, xl, xxl
        </Code>
      </Typography>
      <Typography variant={"body1"} style={{ margin: "16px 0" }}>
        Function define sizing
      </Typography>
      <Code>{`
  function getFontSize(size, variant = "", theme) {
    let multiplier;
    
    switch (size) {
    case "sm":
      multiplier = 0.8;
      break;
    case "md":
      multiplier = 1.5;
      break;
    case "xl":
      multiplier = 2;
      break;
    case "xxl":
      multiplier = 3;
      break;
    default:
      multiplier = 1;
      break;
    }

  const defaultSize =
    variant && theme.typography[variant]
      ? theme.typography[variant].fontSize
      : theme.typography.fontStyle + "px";

  return \`calc(\${defaultSize} * \${multiplier})\`;
}
        `}</Code>
      <Typography variant={"body1"} style={{ margin: "16px 0" }}>
        You can define{" "}
        <Code row inline>
          weight
        </Code>{" "}
        prop to add{" "}
        <Code row inline>
          font-weight
        </Code>
        property to your text. Take a look at the function:
      </Typography>
      <Code>{`
  function getFontWeight(style) {
      switch (style) {
        case "light":
          return 300;
        case "medium":
          return 500;
        case "bold":
          return 600;
        default:
          return 400;
      }
  }
        `}</Code>
    </Widget>
  );
};

export default TypographyPage;
