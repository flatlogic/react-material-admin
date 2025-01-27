import React from "react";

//components
import Widget from "../../../Widget";
import { Typography } from "../../../Wrappers";
import {List, ListItem, ListItemText} from "@material-ui/core";

const Libs = () => {
  return (
    <Widget title={"Libs"} inheritHeight disableWidgetMenu>
      <Typography variant={"body1"}>Icons libs:</Typography>
        <List>
            <ListItem>
                <ListItemText primary="Material UI icons" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Font Awesome icons" />
            </ListItem>
            <ListItem>
                <ListItemText primary="MDI icons" />
            </ListItem>
        </List>
        <Typography variant={"body1"}>API libs:</Typography>
        <List>
            <ListItem>
                <ListItemText primary="Axios" />
            </ListItem>
        </List>
        <Typography variant={"body1"}>Styles libs:</Typography>
        <List>
            <ListItem>
                <ListItemText primary="Material UI JSS" />
                <ListItemText primary="Styled Components" />
            </ListItem>
        </List>
        <Typography variant={"body1"}>Charts libs:</Typography>
        <List>
            <ListItem>
                <ListItemText primary="Recharts" />
                <ListItemText primary="Apexcharts" />
            </ListItem>
        </List>
        <Typography variant={"body1"}>Datatables libs:</Typography>
        <List>
            <ListItem>
                <ListItemText primary="mui-datatables" />
            </ListItem>
        </List>
        <Typography variant={"body1"}>Other libs:</Typography>
        <List>
            <ListItem>
                <ListItemText primary="Classnames" />
                <ListItemText primary="Tinycolor2" />
            </ListItem>
        </List>
    </Widget>
  );
};

export default Libs;
