import React from "react";
import {
  Grid,
  Box,
  IconButton,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import {
  Mail as MailIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@material-ui/icons";
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Code from "../../components/Code";
import { Badge, Typography, Chip, Button } from "../../components/Wrappers";

export default function BadgeComp() {
  const classes = useStyles();
  return (
    <div>
      <PageTitle title="Cards" />
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <Widget title="Simple Card" disableWidgetMenu>
            <Typography>
              Although cards can support multiple actions, UI controls, and an
              overflow menu, use restraint and remember that cards are entry
              points to more complex and detailed information.
            </Typography>
            <Box></Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
