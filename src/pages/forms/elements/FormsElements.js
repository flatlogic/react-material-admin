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
import useStyles from "./styles";
import cn from "classnames";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import FormGroup from "@material-ui/core/FormGroup";
import Input from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import {
  AccountCircle,
  VpnKey as PasswordIcon,
  AccountBalanceWallet as WalletIcon,
} from "@material-ui/icons";

// components
import PageTitle from "../../../components/PageTitle/PageTitle";
import Widget from "../../../components/Widget/Widget";
import { Button, Typography } from "../../../components/Wrappers/";

const GreenCheckbox = withStyles({
  root: {
    color: "green",
    "&$checked": {
      color: "green",
    },
  },
})(props => <Checkbox color="default" {...props} />);

const GreenRadio = withStyles({
  root: {
    color: "green",
    "&$checked": {
      color: "green",
    },
  },
})(props => <Radio color="default" {...props} />);

const SuccessInput = withStyles(theme => ({
  root: {
    "& .MuiInputLabel-root": {
      color: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
        borderWidth: 2,
      },
    },
  },
}))(props => <Input {...props} />);

export default function TooltipsComp() {
  const [isChecked, setChecked] = React.useState({
    default: false,
    horizontal: false,
  });

  const classes = useStyles();

  function StyledRadio(props) {
    return (
      <Radio
        className={classes.root}
        disableRipple
        color="default"
        checkedIcon={<span className={cn(classes.icon, classes.checkedIcon)} />}
        icon={<span className={classes.icon} />}
        {...props}
      />
    );
  }
  return (
    <div>
      <PageTitle title="Forms" />
      <Grid container spacing={6}>
        <Grid item md={6} xs={12}>
          <Widget title="Horizontal form" disableWidgetMenu inheritHeight>
            <Grid container direction={"column"} spacing={3}>
              <Grid item container alignItems={"center"}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Normal field</Typography>
                </Grid>
                <Grid xs={6} item>
                  <Input
                    id="component-helper1"
                    placeholder={"May have placeholder"}
                    style={{width: '100%'}}
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems={"center"}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Label hint</Typography>
                </Grid>
                <Grid xs={6} item>
                  <Input
                    id="component-helper2"
                    aria-describedby="component-helper-text"
                    style={{width: '100%'}}
                  />
                  <FormHelperText id="component-helper-text">
                    Some important helper text
                  </FormHelperText>
                </Grid>
              </Grid>
              <Grid item container alignItems={"center"}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Disabled input</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    disabled
                    defaultValue={"Default value"}
                    id="component-helper3"
                    style={{width: '100%'}}
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems={"center"}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Max length</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Input id="component-helper4" inputProps={{ maxLength: 3 }} style={{width:'100%'}}/>
                </Grid>
              </Grid>
              <Grid item container alignItems={"center"}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Prepended input</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    id="component-helper5"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    }}
                    style={{width: '100%'}}
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems={"center"}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Password</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    id="component-helper6"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PasswordIcon />
                        </InputAdornment>
                      ),
                    }}
                    style={{width: '100%'}}
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems={"center"}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Appended input</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    id="component-helper7"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">.00</InputAdornment>
                      ),
                    }}
                    style={{width: '100%'}}
                  />
                </Grid>
              </Grid>
              <Grid item container alignItems={"center"}>
                <Grid item xs={6}>
                  <Typography variant={"body1"}>Combined input</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Input
                    id="component-helper8"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <WalletIcon />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="start">.00</InputAdornment>
                      ),
                    }}
                    style={{width:'100%'}}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <Button variant={"contained"} color={"primary"}>
                  Save changes
                </Button>
              </Grid>
              <Grid item>
                <Button variant={"contained"} color={"secondary"}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
        <Grid item md={6} xs={12}>
          <Widget title="Input Form" disableWidgetMenu inheritHeight>
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
                      defaultChecked={isChecked.horizontal}
                      onClick={e =>
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
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Widget title="Form Elements" disableWidgetMenu inheritHeight>
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
                  defaultValue={"flatlogic"}
                  margin="normal"
                  variant="outlined"
                  type={"password"}
                  fullWidth={true}
                />
              </Grid>
              <Grid item>
                <Input
                  label="Placeholder"
                  placeholder={"Placeholder"}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                />
              </Grid>
              <Grid item>
                <Input
                  disabled
                  label="Diasbled"
                  defaultValue={"Disabled input"}
                  margin="normal"
                  variant="outlined"
                  fullWidth={true}
                />
                <Grid item>
                  <Input
                    label="Search"
                    defaultValue={"Search field"}
                    margin="normal"
                    variant="outlined"
                    type={"search"}
                    fullWidth={true}
                  />
                </Grid>
                <Grid item>
                  <Input
                    label="Number"
                    defaultValue={"0"}
                    margin="normal"
                    variant="outlined"
                    type={"number"}
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
              <Box mt={1}>
                <Grid item>
                  <Typography>Checkboxes and radios</Typography>
                  <FormGroup row>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={isChecked.default}
                          onChange={e =>
                            setChecked({ [e.target.value]: !isChecked.default })
                          }
                          color="primary"
                          inputProps={{
                            "aria-label": "primary checkbox",
                          }}
                        />
                      }
                      label={"First checkbox"}
                      value={"default"}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked={isChecked.default}
                          onChange={e =>
                            setChecked({ [e.target.value]: !isChecked.default })
                          }
                          color="primary"
                          inputProps={{
                            "aria-label": "primary checkbox",
                          }}
                        />
                      }
                      label={"Second checkbox"}
                      value={"default"}
                    />
                    <FormControlLabel
                      value="bottom"
                      control={<Radio color="primary" />}
                      label="First radio"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Radio color="primary" />}
                      label="Second radio"
                    />
                  </FormGroup>
                </Grid>
              </Box>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item md={12} xs={12}>
          <Widget title="Input variants" disableWidgetMenu inheritHeight>
            <Grid container direction={"column"}>
              <Typography>Custom checkboxes & radios</Typography>
              <Grid item>
                <FormControlLabel
                  control={
                    <Checkbox
                      disabled
                      defaultChecked={isChecked.default}
                      onChange={e =>
                        setChecked({ [e.target.value]: !isChecked.default })
                      }
                      value="checkedG"
                    />
                  }
                  label="Disabled"
                />
                <FormControlLabel
                  control={
                    <GreenCheckbox
                      defaultChecked={isChecked.default}
                      onChange={e =>
                        setChecked({ [e.target.value]: !isChecked.default })
                      }
                      value="checkedG"
                    />
                  }
                  label="Custom color"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      value="checkedH"
                    />
                  }
                  label="Custom icon"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                      checkedIcon={<CheckBoxIcon fontSize="small" />}
                      value="checkedI"
                    />
                  }
                  label="Custom size"
                />
              </Grid>
              <Grid item>
                <FormControlLabel
                  control={
                    <Radio
                      disabled
                      defaultChecked={isChecked.default}
                      onChange={e =>
                        setChecked({ [e.target.value]: !isChecked.default })
                      }
                      value="c"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "C" }}
                    />
                  }
                  label={"Disabled"}
                />
                <FormControlLabel
                  control={
                    <GreenRadio
                      defaultChecked={isChecked.default}
                      onChange={e =>
                        setChecked({ [e.target.value]: !isChecked.default })
                      }
                      value="c"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "C" }}
                    />
                  }
                  label={"Custom color"}
                />
                <FormControlLabel
                  control={
                    <Radio
                      defaultChecked={isChecked.default}
                      onChange={e =>
                        setChecked({ [e.target.value]: !isChecked.default })
                      }
                      value="e"
                      color="default"
                      name="radio-button-demo"
                      inputProps={{ "aria-label": "E" }}
                      icon={<RadioButtonUncheckedIcon fontSize="small" />}
                      checkedIcon={<RadioButtonCheckedIcon fontSize="small" />}
                    />
                  }
                  label={"Small radio"}
                />
                <FormControlLabel
                  value="a"
                  control={<StyledRadio />}
                  label="Custom style"
                />
                <Grid item>
                  <Input
                    error
                    label="Error input"
                    placeholder={"Input with an error"}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                  />
                  <SuccessInput
                    label="Success input"
                    placeholder={"Input with success"}
                    margin="normal"
                    variant="outlined"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
}
