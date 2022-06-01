import React from 'react';
import { withStyles } from '@mui/styles';
import { Typography, Grid, FormGroup, FormLabel, TextField } from '@mui/material';
import { Button } from "../../../components/Wrappers";

const styles = (theme) => ({
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  headerText: {
    textAlign: 'center',
  },
  description: {
    fontSize: '1.25rem',
    padding: '5px 30px 15px',
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  label: {
    margin: '5px 0',
  },
  blocksMargin: {
    marginBottom: '1rem',
  },
  buttonsGroup: {
    display: 'flex',
    flexDirection: 'row',
    float: 'right',
  },
  button: {
    marginLeft: '1rem',
  },
  formLabels: {
    padding: 0,
    margin: 0,
  },
});

const AutoloadWidget = ({ classes }) => {
  return (
    <Grid container direction={'column'} >
      <Grid item className={classes.header} xs={12}>
        <Typography variant="h2" className={classes.headerText}>Sign up, it&apos;s <strong>free</strong>!</Typography>
        <div className={classes.description} >
        Faith makes it possible to achieve that which man&apos;s mind can conceive and believe.
        </div>
      </Grid>
      <Grid container item direction={'column'} xs={12}>
        <Grid item className={classes.blocksMargin}>
          <FormGroup>
            <div className={classes.formLabels}>
              <FormLabel htmlFor="exampleInputEmail1">&nbsp; Email address</FormLabel>
            </div>
            <TextField
              id="exampleInputEmail1"
              type="email" 
              placeholder="Enter email"
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </FormGroup>
        </Grid>
        <Grid item className={classes.blocksMargin}>
          <FormGroup>
            <div className={classes.formLabels}>
              <FormLabel htmlFor="pswd"><i /> &nbsp; Password</FormLabel>
            </div>
            <TextField 
              id="pswd" 
              type="text" 
              placeholder="Min 8 characters"
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </FormGroup>
        </Grid>
        <Grid item>
          <Typography className={classes.blocksMargin}>
            To make a widget automatically load it's content you just need to set <strong>autoload</strong> attribute and provide an api to update the widget content.
          </Typography>
          <TextField
            id="outlined-read-only-input"
            defaultValue="<Widget updateWidgetData={this.updateWidgetData}/>"
            size="small"
            InputProps={{
              readOnly: true,
            }}
            variant="outlined"
            fullWidth
            margin="normal"
          >
          </TextField>

          {/* <pre><code>&lt;Widget updateWidgetData={"{this.updateWidgetData}"} /&gt;</code></pre> */}
          <Typography className={classes.blocksMargin}>
            <strong>autoload</strong> may be set to an integer value. If set, for example, to 2000 will refresh widget every 2 seconds.
          </Typography>
          <div className={classes.buttonsGroup}>
            <Button
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              className={classes.button}
              color="success"
              variant="contained"
            >
              &nbsp;Submit&nbsp;
            </Button>
          </div>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(AutoloadWidget);
