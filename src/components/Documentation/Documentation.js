import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  withRouter,
} from 'react-router-dom';

//styles
import useStyles from './styles';

//pages
import Start from './pages/start';
import TypographyPage from './pages/typography';
import HeaderPage from './pages/header';
import SidebarPage from './pages/sidebar';
import ButtonsPage from './pages/buttons';

//components
import Header from './components/Header';
import Sidebar from '../../components/Sidebar';
import structure from './components/Sidebar/SidebarStructure';
import Widget from '../Widget';

import { Typography } from '../Wrappers';
import classnames from 'classnames';

//context
import { useLayoutState } from '../../context/LayoutContext';
import { Box, Breadcrumbs, Grid } from '@mui/material';

import { NavigateNext as NavigateNextIcon } from '@mui/icons-material';

const Documentation = (props) => {
  // global
  let layoutState = useLayoutState();
  const classes = useStyles();
  const { path } = useRouteMatch();
  return (
    <div className={classes.root}>
      <Header />
      <Sidebar structure={structure} />
      <div
        className={classnames(classes.content, {
          [classes.contentShift]: layoutState.isSidebarOpened,
        })}
      >
        <div className={classes.fakeToolbar} />
        <Widget disableWidgetMenu inheritHeight className={classes.margin}>
          <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
          >

            {/* eslint-disable-next-line array-callback-return */}
            {structure.map((c) => {
              if (!c.children && window.location.hash.includes(c.link) && c.link) {
                return (
                  <Box display='flex' alignItems='center' key={c.id}>
                    <Breadcrumbs aria-label='breadcrumb'>
                      <Typography variant='h4'>{c.label}</Typography>
                    </Breadcrumbs>
                  </Box>
                );
              } else if (c.children) {
                return c.children.forEach((currentInner) => {
                  // eslint-disable-array-callback-return
                  if (window.location.hash.includes(currentInner.link)) {
                    return (
                      <Breadcrumbs
                        separator={<NavigateNextIcon fontSize='small' />}
                        aria-label='breadcrumb'
                        key={c.id}
                      >
                        <Typography variant={'h6'}>{c.label}</Typography>
                        <Typography color='primary' variant={'h6'}>
                          {currentInner.label}
                        </Typography>
                      </Breadcrumbs>
                    );
                  }
                });
              }
            })}
          </Grid>
        </Widget>
        <Switch>
          <Route path={path} exact>
            <Redirect to={`${path}/getting-started/quick-start`} />
          </Route>
          <Route path={`${path}/getting-started/quick-start`}>
            <Start />
          </Route>
          <Route path={`${path}/components/typography`}>
            <TypographyPage />
          </Route>
          <Route path={`${path}/components/header`}>
            <HeaderPage />
          </Route>
          <Route path={`${path}/components/sidebar`}>
            <SidebarPage />
          </Route>
          <Route path={`${path}/components/buttons`}>
            <ButtonsPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(Documentation);
