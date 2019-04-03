import React from "react";
import { Button, Typography, withStyles } from "@material-ui/core";

const PageTitle = ({ classes, ...props }) => (
  <div className={classes.pageTitleContainer}>
    <Typography className={classes.typo} variant="h2">
      {props.title}
    </Typography>
    {props.button && (
      <Button
        classes={{ root: classes.button }}
        variant="contained"
        size="large"
        color="secondary"
      >
        {props.button}
      </Button>
    )}
  </div>
);

const styles = theme => ({
  pageTitleContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing.unit * 4,
    marginTop: theme.spacing.unit * 5
  },
  typo: {
    color: theme.palette.text.hint,
  },
  button: {
    boxShadow: theme.customShadows.widget,
    textTransform: 'none',
    '&:active' : {
      boxShadow: theme.customShadows.widgetWide,
    },
  },
});

export default withStyles(styles)(PageTitle);
