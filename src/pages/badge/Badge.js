import React from "react";
import { Grid, Box, Button as NativeButton } from "@material-ui/core";
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Badge, Typography, Chip } from "../../components/Wrappers";

export default function Colors() {
  const classes = useStyles();
  return (
    <div>
      <PageTitle title="Badge" />
      <Grid container spacing={6}>
        <Grid item md={12}>
          <Widget title="Badge Example" disableWidgetMenu>
            <Typography>
              Badges scale to match the size of the immediate parent element by
              using relative font sizing, em units and font color.
            </Typography>
            <Box>
              <Box my={3}>
                <Badge
                  color="primary"
                  badgeContent={"Primary"}
                  fontColor={"white"}
                >
                  <Typography variant="h1" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge
                  color="secondary"
                  badgeContent={"Secondary"}
                  fontColor={"white"}
                >
                  <Typography variant="h2" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge
                  color="warning"
                  badgeContent={"Warning"}
                  fontColor={"white"}
                >
                  <Typography variant="h3" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge color="info" badgeContent={"Info"} fontColor={"white"}>
                  <Typography variant="h4" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge
                  color="success"
                  badgeContent={"Success"}
                  fontColor={"white"}
                >
                  <Typography variant="h5" className={classes.paddingTop}>
                    Example heading
                  </Typography>
                </Badge>
              </Box>
              <Box my={3}>
                <Badge
                  color="danger"
                  badgeContent={"Danger"}
                  fontColor={"white"}
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
                <Badge color="danger" badgeContent={"1"} fontColor={"white"}>
                  <NativeButton
                    variant="contained"
                    className={classes.paddingTop}
                  >
                    Example heading
                  </NativeButton>
                </Badge>
              </Box>
            </Box>
          </Widget>
        </Grid>

        <Grid item md={12}>
          <Widget title="Chips" disableWidgetMenu>
            <Typography>Chips allow users to enter information, make selections, filter content, or trigger actions.</Typography>
            <Box>
                <Chip color="primary" label={"1"}/>
                <Chip color="secondary" label={"2"}/>
                <Chip color="warning" label={"3"}/>
                <Chip color="info" label={"4"}/>
                <Chip color="success" label={"5"}/>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
