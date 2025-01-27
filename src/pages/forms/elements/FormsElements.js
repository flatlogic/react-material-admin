import React from "react";
import {
  Grid,
  FormHelperText,
  InputAdornment,
  Divider,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import useStyles from "./styles";
import cn from "classnames";
import {Checkbox, Radio, Input, FormControlLabel} from "@mui/material";

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

import {
  Favorite,
  FavoriteBorder,
  AccountCircle,
  VpnKey as PasswordIcon,
  AccountBalanceWallet as WalletIcon
} from "@mui/icons-material";

// components
import Widget from "../../../components/Widget/Widget";
import { Button, Typography } from "../../../components/Wrappers/Wrappers";
import Code from "../../../components/Code/Code";

const GreenCheckbox = withStyles({
  root: {
    color: "green",
    "&$checked": {
      color: "green"
    }
  }
})(props => <Checkbox color="default" {...props} />);

const GreenRadio = withStyles({
  root: {
    color: "green",
    "&$checked": {
      color: "green"
    }
  }
})(props => <Radio color="default" {...props} />);

const actions = [
  {
    id: 0,
    value: "Action"
  },
  {
    id: 1,
    value: "Another action"
  },
  {
    id: 2,
    value: "Something else here"
  },
  {
    id: 3,
    type: "divider"
  },
  {
    id: 4,
    value: "Separated link"
  }
];

export default function FormsElements() {
  const [isChecked, setChecked] = React.useState({
    default: false,
    horizontal: false
  });
  const [action, setAction] = React.useState("Action");

  const handleChange = e => {
    setAction(e.target.value);
  };

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
      <Grid container spacing={4}>
        <Grid container item spacing={4} >
          <Grid item md={6} xs={12}>
            <Widget
                title="Horizontal form"
                bodyClass={classes.horizontalFormTop}
                disableWidgetMenu
                inheritHeight
            >
              <Grid container direction={"column"} spacing={3}>
                <Grid item container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography variant={"body1"}>Normal field</Typography>
                  </Grid>
                  <Grid xs={6} item>
                    <Input
                        id="component-helper1"
                        placeholder={"May have placeholder"}
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
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
                        style={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
                <Grid item container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography variant={"body1"}>Max length</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Input
                        id="component-helper4"
                        inputProps={{ maxLength: 3 }}
                        style={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
                <Grid item container alignItems={"center"}>
                  <Grid item xs={6}>
                    <Typography variant={"body1"}>Prepended input</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Input
                        id="component-helper5"
                        startAdornment={
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        }
                        style={{ width: "100%" }}
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
                        startAdornment={
                          <InputAdornment position="start">
                            <PasswordIcon />
                          </InputAdornment>
                        }
                        style={{ width: "100%" }}
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
                        endAdornment={
                          <InputAdornment position="start">.00</InputAdornment>
                        }
                        style={{ width: "100%" }}
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
                        startAdornment={
                          <InputAdornment position="start">
                            <WalletIcon />
                          </InputAdornment>
                        }
                        endAdornment={
                          <InputAdornment position="start">.00</InputAdornment>
                        }
                        style={{ width: "100%" }}
                    />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        style={{ marginRight: 8 }}
                    >
                      Save changes
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant={"contained"} color={"secondary"}>
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Widget>
          </Grid>
          <Grid item md={6} xs={12}>
            <Grid item xs={12} >
              <Widget title="Default Form" disableWidgetMenu >
                <Grid container item xs={12} justifyContent="space-between" alignItems="center" spacing={3}>
                  <Grid item md={6} xs={12} lg={4}>
                    <Typography variant="body1">Search type input</Typography>
                    <Input
                        variant="standard"
                        color="primary"
                        type="search"
                        style={{margin: "none", marginTop: 30}}
                        placeholder="Search"
                    />
                  </Grid>
                  <Grid item md={6} xs={12} lg={4}>
                    <Typography variant="body1">
                      Outlined input
                    </Typography>
                    <TextField
                        id="outlined-input"
                        style={{margin: "none", marginTop: "16px"}}
                        variant="outlined"
                        placeholder="Outlined"
                    />
                  </Grid>
                  <Grid item md={6} xs={12} lg={4}>
                    <Typography>Filled input</Typography>
                    <TextField
                        id="outlined-input"
                        style={{margin: "none", marginTop: "16px"}}
                        variant="filled"
                        placeholder="Filled"
                    />
                  </Grid>
                </Grid>
              </Widget>
            </Grid>
            <Grid item xs={12} style={{marginTop: '2rem'}}>
              <Widget title="Selects" disableWidgetMenu >
                <Grid container item xs={12} justifyContent="space-between" alignItems="center" spacing={3}>
                  <Grid container item spacing={6} xs={12} direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item xs={6} >
                      <Typography variant="body1">Default select</Typography>
                    </Grid>
                    <Grid item xs={6} >
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          style={{ alignSelf: 'flex-end'}}
                          value={action}
                          onChange={handleChange}
                      >
                        {actions.map(c =>
                            c.type === "divider" ? (
                                <Divider key={c.id} />
                            ) : (
                                <MenuItem value={c.value} key={c.id}>
                                  {c.value}
                                </MenuItem>
                            )
                        )}
                      </Select>
                    </Grid>
                  </Grid>
                  <Grid container item spacing={6} xs={12} direction="row" justifyContent="space-between" alignItems="center">
                    <Grid item xs={6} >
                      <Typography variant={"body1"}>Grouped select</Typography>
                    </Grid>
                    <Grid item xs={6} >
                      <Select
                          style={{}}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={action}
                          onChange={handleChange}
                      >
                        {actions.map(c =>
                            c.type === "divider" ? (
                                <Divider key={c.id} />
                            ) : (
                                <MenuItem value={c.value} key={c.id}>
                                  {c.value}
                                </MenuItem>
                            )
                        )}
                      </Select>
                    </Grid>
                  </Grid>
                </Grid>
              </Widget>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item spacing={4}>
          <Grid item xs={12}>
            <Widget title="Control sizing" disableWidgetMenu inheritHeight>
              <Grid container direction={"column"} spacing={4}>
                <Grid item>
                  Fancy smaller inputs? Use the size
                  <Code row inline>
                    small
                  </Code>
                  prop.{" "}
                  <TextField
                      label='Size="small"'
                      placeholder={"Size small"}
                      size="small"
                      variant="outlined"
                      fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                      label='Size="normal"'
                      placeholder={"Size normal"}
                      variant="outlined"
                      fullWidth
                  />
                </Grid>
              </Grid>
            </Widget>
          </Grid>
        </Grid>

        <Grid container item spacing={4}>
          <Grid item md={6} xs={12}>
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
                    <TextField
                        error
                        label="Error input"
                        placeholder={"Input with an error"}
                        variant="outlined"
                        fullWidth={true}
                        style={{marginBottom: '1rem'}}
                    />
                    <TextField
                        color="success"
                        label="Success input"
                        placeholder={"Input with success"}
                        variant="outlined"
                        fullWidth={true}
                        focused
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Widget>
          </Grid>
          <Grid item xs={12} md={6}>
            <Widget title="Textareas" disableWidgetMenu inheritHeight>
              <Grid item xs={6}>
                <Typography variant="body1">Simple textarea</Typography>
              </Grid>
              <Grid item container alignItems="center">
                <Grid xs={12} item>
                  <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={4}
                      defaultValue="Default Value"
                      style={{marginTop: '1rem', width: '100%'}}
                  />
                </Grid>
              </Grid>
            </Widget>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
