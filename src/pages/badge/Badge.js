import React from "react";
import { Grid, Box, IconButton, Tab, Tabs, AppBar } from "@mui/material";
import {
  Mail as MailIcon,
  ShoppingCart as ShoppingCartIcon
} from "@mui/icons-material";
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import Code from "../../components/Code";
import { Badge, Typography, Chip, Button } from "../../components/Wrappers";

export default function BadgeComp() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <Widget title="Badge Example" disableWidgetMenu>
            <Typography>
              Badge generates a small badge to the top-right of its child(ren)
            </Typography>
            <Box>
              <Box my={3}>
                <Badge color="primary" badgeContent={"Primary"}>
                  <Typography variant="h1" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge color="secondary" badgeContent={"Secondary"}>
                  <Typography variant="h2" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge color="warning" badgeContent={"Warning"}>
                  <Typography variant="h3" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge color="info" badgeContent={"Info"}>
                  <Typography variant="h4" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge color="success" badgeContent={"Success"}>
                  <Typography variant="h5" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge
                  color="primary"
                  colorBrightness="light"
                  badgeContent={"Primary light"}
                >
                  <Typography variant="h6" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Typography>
                Badges can be used as part of links or buttons to provide a
                counter.
              </Typography>
              <Box my={3}>
                <Badge color="success" badgeContent={"1"}>
                  <Button variant="contained" className={classes.paddingTop}>
                    Example heading
                  </Button>
                </Badge>
              </Box>
            </Box>
          </Widget>
        </Grid>

        <Grid item md={6} xs={12}>
          <Widget title="Icon Badges" disableWidgetMenu>
            <Typography>
              Badge can also be used as a parent of a icon as well as a parent
              of a clickable icon
            </Typography>
            <Box>
              <Box
                my={1}
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Badge
                  className={classes.badge}
                  badgeContent={4}
                  color="primary"
                >
                  <MailIcon />
                </Badge>
                <Badge
                  className={classes.badge}
                  badgeContent={10}
                  color="secondary"
                >
                  <MailIcon />
                </Badge>
                <IconButton
                  aria-label="4 pending messages"
                  className={classes.badge}
                >
                  <Badge badgeContent={4} color="warning">
                    <MailIcon />
                  </Badge>
                </IconButton>
              </Box>
              <Box my={6}>
                <AppBar position="static" color="default">
                  <Tabs
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab
                      label={
                        <Badge
                          className={classes.padding}
                          color="secondary"
                          badgeContent={4}
                        >
                          Item One
                        </Badge>
                      }
                    />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                  </Tabs>
                </AppBar>
              </Box>
              <Typography block>
                You may to use dot badge via{" "}
                <Code row inline>{`variant="dot"`}</Code>
              </Typography>
              <Box
                my={6}
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Badge
                  badgeContent={4}
                  color={"primary"}
                  className={classes.margin}
                  variant={"dot"}
                >
                  <ShoppingCartIcon />
                </Badge>
                <Badge
                  badgeContent={4}
                  color="secondary"
                  className={classes.margin}
                  variant={"dot"}
                >
                  <MailIcon />
                </Badge>
                <Badge
                  badgeContent={4}
                  color="warning"
                  className={classes.margin}
                  variant={"dot"}
                >
                  <Typography>Typography</Typography>
                </Badge>
              </Box>
              <Typography block>
                You can use the <Code row inline>{`horizontalAlignment`}</Code>{" "}
                and <Code row inline>{`verticalAlignment`}</Code>
                properties to move the badge to any corner of the wrapped
                element.
              </Typography>
              <Box
                my={6}
                justifyContent="center"
                display="flex"
                alignItems="center"
              >
                <Badge
                  badgeContent={4}
                  color={"primary"}
                  className={classes.margin}
                  variant={"dot"}
                >
                  <ShoppingCartIcon />
                </Badge>
                <Badge
                  badgeContent={4}
                  color="secondary"
                  className={classes.margin}
                  variant={"dot"}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                >
                  <MailIcon />
                </Badge>
                <Badge
                  badgeContent={4}
                  color="warning"
                  className={classes.margin}
                  variant={"dot"}
                  anchorOrigin={{ vertical: "top", horizontal: "left" }}
                  size={""}
                >
                  <Typography>Typography</Typography>
                </Badge>
              </Box>
            </Box>
          </Widget>
        </Grid>

        <Grid item md={12}>
          <Widget title="Chips" disableWidgetMenu>
            <Typography>
              Chips allow users to enter information, make selections, filter
              content, or trigger actions.
            </Typography>
            <Box>
              <Chip
                className={classes.badge}
                color="primary"
                label={"Primary"}
              />
              <Chip
                className={classes.badge}
                color="secondary"
                label={"Secondary"}
              />
              <Chip
                className={classes.badge}
                color="warning"
                label={"Warning"}
              />
              <Chip className={classes.badge} color="info" label={"Info"} />
              <Chip
                className={classes.badge}
                color="success"
                label={"Success"}
              />
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
