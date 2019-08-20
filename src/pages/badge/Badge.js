import React from "react";
import { Grid, Box } from "@material-ui/core";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Badge, Typography } from "../../components/Wrappers";

export default function Colors() {
  return (
    <div>
      <PageTitle title="Badge" />
      <Grid container spacing={6}>
        <Grid item md={12}>
          <Widget title="Badge Example" disableWidgetMenu>
            <Typography>
              Badges scale to match the size of the immediate parent element by
              using relative font sizing and em units.
            </Typography>
            <Box >
              <Box my={3}>
              <Typography variant="h3">
                <Badge
                  color="primary"
                  badgeContent={"Primary"}
                  fontColor={"white"}
                >
                  Example heading
                </Badge>
              </Typography>
              </Box>
              <Box my={3}>
              <Typography variant="h2">
                <Badge
                  color="secondary"
                  badgeContent={"Secondary"}
                  fontColor={"white"}
                >
                  Example heading
                </Badge>
                <Badge color="secondary">2</Badge>
              </Typography>
              </Box>
              <Box my={3}>
              <Typography variant="h3">
                <Badge
                  color="warning"
                  badgeContent={"Warning"}
                  fontColor={"white"}
                >
                  Example heading
                </Badge>
                <Badge color="warning">3</Badge>
              </Typography>
              </Box>
              <Box my={3}>
              <Typography variant="h3">
                <Badge color="info" badgeContent={"Info"} fontColor={"white"}>
                  Example heading
                </Badge>
              </Typography>
              </Box>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
