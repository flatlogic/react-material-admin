import React from "react";
import { Grid } from "@mui/material";

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

export default function TypographyPage() {
  let classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Widget title="Headings" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" className={classes.text}>
                h1. Heading
              </Typography>
              <Typography variant="h2" className={classes.text}>
                h2. Heading
              </Typography>
              <Typography variant="h3" className={classes.text}>
                h3. Heading
              </Typography>
              <Typography variant="h4" className={classes.text}>
                h4. Heading
              </Typography>
              <Typography variant="h5" className={classes.text}>
                h5. Heading
              </Typography>
              <Typography variant="h6">h6. Heading</Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Typography Colors" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography variant="h1" color="primary" className={classes.text}>
                h1. Heading
              </Typography>
              <Typography variant="h2" color="success" className={classes.text}>
                h2. Heading
              </Typography>
              <Typography
                variant="h3"
                color="secondary"
                className={classes.text}
              >
                h3. Heading
              </Typography>
              <Typography variant="h4" color="warning" className={classes.text}>
                h4. Heading
              </Typography>
              <Typography
                variant="h5"
                color="primary"
                colorBrightness="light"
                className={classes.text}
              >
                h5. Heading
              </Typography>
              <Typography variant="h6" color="info">
                h6. Heading
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Basic Text Settings" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text}>Basic text</Typography>
              <Typography className={classes.text} weight="light">
                Basic light text
              </Typography>
              <Typography className={classes.text} weight="medium">
                Basic medium text
              </Typography>
              <Typography className={classes.text} weight="bold">
                Basic bold text
              </Typography>
              <Typography className={classes.text}>
                BASIC UPPERCASE TEXT
              </Typography>
              <Typography className={classes.text}>
                basic lowercase text
              </Typography>
              <Typography className={classes.text}>
                Basic Capitalized Text
              </Typography>
              <Typography>
                <i>Basic Cursive Text</i>
              </Typography>
            </div>
          </Widget>
        </Grid>
        <Grid item xs={12} md={6}>
          <Widget title="Text Size" disableWidgetMenu>
            <div className={classes.dashedBorder}>
              <Typography className={classes.text} size="sm">
                Heading Typography SM Font Size
              </Typography>
              <Typography className={classes.text}>
                Heading Typography Regular Font Size
              </Typography>
              <Typography className={classes.text} size="md">
                Heading Typography MD Font Size
              </Typography>
              <Typography className={classes.text} size="xl">
                Heading Typography XL Font Size
              </Typography>
              <Typography className={classes.text} size="xxl">
                Heading Typography XXL Font Size
              </Typography>
            </div>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

export { useStyles };
