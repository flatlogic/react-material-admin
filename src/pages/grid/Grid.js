import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import {} from "@material-ui/core";
import useStyles from "./styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography, Button } from "../../components/Wrappers";

export default function Colors() {
  const handleClick =(e) => {
    setValue(+e.target.value)
  }
  const classes = useStyles();
  const [value, setValue] = useState(4)
  return (
    <div>
      <PageTitle title="Grid System"/>
      <Grid container spacing={6} justify="center">
        <Grid item xs={12} md={12}>
          <Widget title="How it works" disableWidgetMenu>
            <Typography>
              Material UI uses default grid system that deals with <span className={classes.codeBack}>xs, sm, md, xl</span>. The grid consist of 12 columns.
            </Typography>
            <Grid container justify="center">
              <Grid item className={classes.root} md={value}>
                Lorem ipsum dolor sit.
              </Grid>
              <Grid item md={12} style={{textAlign: 'center'}}>
                <FormControl component="fieldset" >
                  <RadioGroup aria-label="position" name="position" row onChange={handleClick}>
                    <FormControlLabel
                      value="4"
                      control={<Radio color="primary"/>}
                      label="xs={4}"
                      labelPlacement="bottom"
                      selected
                    />
                    <FormControlLabel
                      value="6"
                      control={<Radio color="primary"/>}
                      label="xs={6}"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="8"
                      control={<Radio color="primary"/>}
                      label="xs={8}"
                      labelPlacement="bottom"
                    />
                    <FormControlLabel
                      value="12"
                      control={<Radio color="primary"/>}
                      label="xs={12}"
                      labelPlacement="bottom"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </div>);
}
