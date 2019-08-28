import React from "react";
import { Grid, Box } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function NavComp() {
  const classes = useStyles();
  return (
    <div>
      <PageTitle title="Nav" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="Base Nav" disableWidgetMenu>
            <Typography>
              Navigation available in Material UI share general markup and
              styles, from the base .nav class to the active and disabled
              states. Swap modifier classes to switch between each style.
            </Typography>
            <div className={classes.root}>
              <Box my={3}>
              <AppBar position="static">
                <Toolbar>
                  <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" className={classes.title}>
                    Nav
                  </Typography>
                  <Button color="inherit">Link</Button>
                  <Button color="inherit">Link2</Button>
                  <Button color="inherit">Link3</Button>
                </Toolbar>
              </AppBar>
              </Box>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
