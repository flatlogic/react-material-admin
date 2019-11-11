import React from "react";
import useStyles from "./styles";
import Icon from "@mdi/react";

// Material-UI core components
import { AppBar, Toolbar, IconButton, Box } from "@material-ui/core";

// Material Icons
import { Menu as MenuIcon, Twitter as TwitterIcon } from "@material-ui/icons";
import { mdiDribbble as DribbbleIcon } from "@mdi/js";

// Components
import { Typography, Button } from "../../../Wrappers";

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuIcon}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          block
          style={{ flexGrow: 1, display: "flex", alignItems: "center" }}
        >
          React Material Admin Full{" "}
          <Typography variant={"h5"}>&nbsp; Documentation</Typography>
        </Typography>
        <Box display={"flex"} alignItems={"center"}>
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <Icon path={DribbbleIcon} size={1} color={"#fff"} />
          </IconButton>
          <Button color={"inherit"} style={{ marginRight: 16 }}>
            Live Preview
          </Button>
          <Button variant="outlined" color="secondary">
            Buy
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
