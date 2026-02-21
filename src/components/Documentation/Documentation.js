import React from 'react';
import {
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

//styles
import useStyles from './styles';

//pages
import Start from './pages/start';
import TypographyPage from './pages/typography';
import WidgetPage from './pages/widget';
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

const Documentation = () => {
  // global
  let layoutState = useLayoutState();
  const classes = useStyles();
  const location = useLocation();
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
              if (!c.children && location.pathname.includes(c.link) && c.link) {
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
                  if (location.pathname.includes(currentInner.link)) {
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
        <Routes>
          <Route
            index
            element={<Navigate to='getting-started/quick-start' replace />}
          />
          <Route path='getting-started/quick-start' element={<Start />} />
          <Route path='components/typography' element={<TypographyPage />} />
          <Route path='components/widget' element={<WidgetPage />} />
          <Route path='components/header' element={<HeaderPage />} />
          <Route path='components/sidebar' element={<SidebarPage />} />
          <Route path='components/buttons' element={<ButtonsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Documentation;
