import React from "react";
import { Grid } from "@material-ui/core";
import cn from "classnames";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// components
import PageTitle from "../../../components/PageTitle/PageTitle";
import Widget from "../../../components/Widget/Widget";
import { Button } from "../../../components/Wrappers/Wrappers";

export default function TooltipsComp() {
  const [isChecked, setChecked] = React.useState({
    default: false,
    horizontal: false,
  });
  // const classes = useStyles();

  return (
    <div>
      <PageTitle title="Forms" />
      <Grid container spacing={6}>
        <Grid item md={6}>
          <Widget title="Default Form" disableWidgetMenu inheritHeight>
            <Grid container direction={"column"}>
              <Grid item>
                <Input
                  label="Email"
                  placeholder={"Enter email"}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item>
                <Input
                  label="Password"
                  placeholder={"Enter password"}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isChecked.default}
                      onChange={(e) =>
                        setChecked({ [e.target.value]: !isChecked.default })
                      }
                      color="primary"
                      inputProps={{
                        "aria-label": "primary checkbox",
                      }}
                    />
                  }
                  label={"Remember me"}
                  value={"default"}
                />
              </FormGroup>
              <Grid item>
                <Button variant={"contained"} color={"primary"}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item md={6}>
          <Widget title="Default Form" disableWidgetMenu inheritHeight>
            <Grid container direction={"column"} alignItems={"center"}>
              <Grid item>
                <Input
                  label="Email"
                  placeholder={"Enter email"}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item>
                <Input
                  label="Password"
                  placeholder={"Enter password"}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isChecked.horizontal}
                      onClick={(e) =>
                        setChecked({ [e.target.value]: !isChecked.horizontal })
                      }
                      color="primary"
                      inputProps={{
                        "aria-label": "primary checkbox",
                      }}
                      value={"horizontal"}
                    />
                  }
                  label={"Remember me"}
                />
              </FormGroup>
              <Grid item>
                <Button variant={"contained"} color={"primary"}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
