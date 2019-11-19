import React from "react";

//components
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";
import Code from "../../../Code";
import { List, ListItem, ListItemText } from "@material-ui/core";

const WidgetPage = () => {
  return (
    <Widget title={"Widget"} inheritHeight disableWidgetMenu>
      <Typography variant={"body1"}>
        Widget is the wrapper of native{" "}
        <Code row inline>
          Paper
        </Code>{" "}
        component. But there are a couple of useful props. Such as:{" "}
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="title" />
        </ListItem>
        <ListItem>
          <ListItemText primary="subtitle" />
        </ListItem>
        <ListItem>
          <ListItemText primary="noBodyPadding" />
        </ListItem>
        <ListItem>
          <ListItemText primary="bodyClass" />
        </ListItem>
        <ListItem>
          <ListItemText primary="disableWidgetMenu" />
        </ListItem>
        <ListItem>
          <ListItemText primary="header" />
        </ListItem>
        <ListItem>
          <ListItemText primary="inheritHeight" />
        </ListItem>
        <ListItem>
          <ListItemText primary="searchField" />
        </ListItem>
      </List>
      <Typography variant={"body1"}>
        If{" "}
        <Code rowi inline>
          inheritHeight
        </Code>{" "}
        prop doesn't add to your element,{" "}
        <Code inline row>
          Widget{" "}
        </Code>{" "}
        will fill{" "}
        <Code row inline>
          100%
        </Code>
        of the parent container. To make{" "}
        <Code inline row>
          Widget
        </Code>
        inherit height of the children, ypu have to add{" "}
        <Code row inline>
          inheritHeight
        </Code>{" "}
        prop.
      </Typography>
      <Typography variant={"body1"} style={{ marginTop: 16 }}>
        If you want to add{" "}
        <Code row inline>
          className
        </Code>{" "}
        to your{" "}
        <Code inline row>
          Widget
        </Code>{" "}
        add{" "}
        <Code row inline>
          bodyClass
        </Code>{" "}
        prop.
      </Typography>
      <Typography variant={"body1"} style={{ marginTop: 16 }}>
        By default widget menu is appears in the top right corner of the{" "}
        <Code inline row>
          Widget
        </Code>
        . To delete it type{" "}
        <Code row inline>
          disableWidgetMenu.
        </Code>
      </Typography>
      <Typography variant={"body1"} style={{ marginTop: 16 }}>
        You can perform a lot of things inside{" "}
        <Code inline row>
          header
        </Code>
        . To do this add a{" "}
        <Code inline row>
          JSX
        </Code>
        element to{" "}
        <Code inline row>
          header
        </Code>{" "}
        prop.
      </Typography>
      <Typography variant={"body1"} style={{ marginTop: 16 }}>
        By default we make available search field in{" "}
        <Code row inline>
          Widget
        </Code>{" "}
        component by adding{" "}
        <Code inline row>
          searchField
        </Code>{" "}
        prop. Demo:
      </Typography>
      <Widget
        style={{ marginTop: 16 }}
        disableWidgetMenu
        searchField
        title={"Widget example"}
      >
        Lorem ipsum dolor sit amet, consectetur.
      </Widget>
    </Widget>
  );
};

export default WidgetPage;
