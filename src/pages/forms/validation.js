import React from "react";
import {
  Grid,
  Box,
  InputLabel,
  FormControl,
  FormHelperText,
  InputAdornment,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import cn from "classnames";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/TextField";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import Widget from "../../components/Widget/Widget";
import { Button, Typography } from "../../components/Wrappers/";

export default () => (
  <div>
      <PageTitle title="Form Validation" />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Widget title="Dead simple validation" disableWidgetMenu inheritHeight>
            <Grid container direction={"column"} alignItems="center" spacing={6}>
              <Grid item container alignItems={"center"} xs={6}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Simple required</Typography>
                </Grid>
                <Grid xs={6} item>
                  <Input
                    id="component-helper9"
                    style={{width: '100%'}}
                  />
                </Grid>
                </Grid>
              <Grid item container alignItems={"center"} xs={6}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Min-length On Change</Typography>
                  <Typography variant={"caption"} color="hint">At least 10</Typography>
                </Grid>
                <Grid xs={6} item>
                  <Input
                    id="component-helper10"
                    style={{width: '100%'}}
                  />
                </Grid>
            </Grid>
            <Grid item container alignItems={"center"} xs={6}>
            <Grid xs={12} item>
                  <Box display="flex" justifyContent='space-between'>
                  <Button variant="contained">Cancel</Button>
                  <Button variant="contained" color="success">Validate</Button>
                  </Box>
                </Grid>
                </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
  </div>
)