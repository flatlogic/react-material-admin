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
        <Grid size={12}>
          <Widget disableWidgetMenu>
            <Typography variant={'h5'} weight={'medium'}>
              Requirements:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary='1. macOS, Windows, or Linux' />
              </ListItem>
              <ListItem>
                <ListItemText primary='2. Node.js 20.15 or newer (LTS recommended)' />
              </ListItem>
              <ListItem>
                <ListItemText primary='3. npm or Yarn package manager' />
              </ListItem>
              <ListItem>
                <ListItemText primary='4. Optional: Node.js backend running on http://localhost:8080' />
              </ListItem>
            </List>
            <Typography variant={'h5'} weight={'medium'}>
              Quick Start:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  children={<span>1. Install dependencies: <Code inline>npm install</Code> or <Code inline>yarn install</Code></span>}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  children={<span>2. Start frontend-only mode (default): <Code inline>npm run dev</Code> or <Code inline>yarn dev</Code></span>}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  children={<span>3. Enable backend mode by setting <Code inline>REACT_APP_BACKEND=true</Code> in <Code inline>.env.local</Code>, then run <Code inline>npm run dev</Code></span>}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  children={<span>4. Build production bundle: <Code inline>npm run build</Code> or <Code inline>yarn build</Code></span>}
                />
              </ListItem>
            </List>
            <Typography variant={'h5'} weight={'medium'}>
              Other scripts:
            </Typography>
            <List>
              <ListItem>
                <ListItemText
                  children={<span><Code inline>npm run start</Code>: starts development server (alias to dev)</span>}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  children={<span><Code inline>npm test</Code>: run tests in watch mode</span>}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  children={<span><Code inline>npm run format</Code>: format source files with Prettier</span>}
                />
              </ListItem>
            </List>
            <Typography variant={'body2'}>
              If users pages show Network Error, run frontend-only mode or start backend API on port 8080.
            </Typography>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default Start;
