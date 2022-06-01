import React from 'react';
import { Grid, List, ListItem, ListItemText } from '@mui/material';

//components
import Widget from '../../../Widget';
import { Typography } from '../../../Wrappers';
import Code from '../../../Code';

const Start = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
            <Typography variant={'h5'} weight={'medium'}>
              Requirements:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary='1. Mac OS X, Windows, or Linux' />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='2. Yarn package + Node.js v6.5 or newer
'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary='3. Running our Node.js backend (Required only in full stack version)
'
                />
              </ListItem>
            </List>
            <Typography variant={'h5'} weight={'medium'}>
              Quick Start:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  children={
                    <span>
                      1. Run <Code inline>yarn install</Code>
                    </span>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  children={
                    <span>
                      1. Run <Code inline>yarn start</Code>
                    </span>
                  }
                />
              </ListItem>
            </List>
            <Typography variant={'h5'} weight={'medium'}>
              There are also other npm tasks:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  children={
                    <span>
                      <Code inline>yarn build</Code>: if you need just to build
                      the app (without running a dev server)" />
                    </span>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  children={
                    <span>
                      <Code inline>yarn lint</Code>: to check the source code
                      for syntax errors and potential issues" />
                    </span>
                  }
                />
              </ListItem>
            </List>
            <Typography variant={'body2'}>
              For more instruction please refer to React Material Admin Full
              readme.md.
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default Start;
