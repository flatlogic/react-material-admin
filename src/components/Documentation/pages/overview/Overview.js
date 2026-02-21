import React from 'react';
import { Grid, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Done as DoneIcon,
  ArrowRightAlt as ArrowRight,
} from '@mui/icons-material';

import useStyles from './styles';

// components
import Widget from '../../../Widget';
import { Typography, Link } from '../../../Wrappers';

const Overview = () => {
  const styles = useStyles();

  return (
    <>
      <Grid container spacing={6}>
        <Grid size={12}>
          <Widget disableWidgetMenu>
            <Typography variant={'h6'}>
              React Material Admin is a dashboard starter with modern React and MUI.
              It is suitable for SaaS admin panels, internal tools, and data-heavy
              business apps.
            </Typography>

            <Box pt={6}>
              <Typography variant={'h3'}>Features</Typography>
            </Box>
            <List>
              <ListItem>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary='React 19 + MUI 7' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary='Routing with React Router v5' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary='Redux + thunk state management' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary='DataGrid tables, forms, charts, calendar, profile pages' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary='Frontend-only mode and optional backend mode' />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <DoneIcon />
                </ListItemIcon>
                <ListItemText primary='Theme switching and responsive layout' />
              </ListItem>
            </List>

            <Box pt={6} pb={6}>
              <Typography variant={'h3'}>Support</Typography>
              <Typography variant={'body1'} style={{ marginTop: 12 }}>
                For help and feedback, use the support forum.
              </Typography>
              <a
                href='https://flatlogic.com/forum'
                target='_blank'
                rel='noopener noreferrer'
                className={styles.link}
              >
                Support forum <ArrowRight />
              </a>
            </Box>

            <Box display='flex' justifyContent='space-around' my={3}>
              <Box>
                <Typography variant={'h3'} style={{ marginBottom: 16 }}>
                  Continue with
                </Typography>
                <Link
                  href={'/documentation/getting-started/quick-start'}
                  variant={'h6'}
                  color={'primary'}
                  className={styles.link}
                >
                  Quick start <ArrowRight />
                </Link>
              </Box>
              <Box>
                <Typography variant={'h3'} style={{ marginBottom: 16 }}>
                  Explore
                </Typography>
                <Link
                  href={'/documentation/components/typography'}
                  variant={'h6'}
                  color={'primary'}
                  className={styles.link}
                >
                  Components <ArrowRight />
                </Link>
              </Box>
            </Box>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default Overview;
