import React from 'react';
import { Grid, Typography } from '@mui/material';
import Widget from '../../components/Widget';
import Sortable from 'react-sortablejs'
// Components
import DraggableStory from './Components/DraggableStory';
import Loader from './Components/Loader/Loader';
import CollapsedWidget from './Components/CollapsedWidget';
import WidgsterInfo from './Components/WidgsterInfo';
import SharesWidget from './Components/SharesWidget';
import AutoloadWidget from './Components/AutoloadWidget';
import NewsWidget from './Components/NewsWidget';

import mock from './mock';
import useStyles from "./styles";

function DraggableGrid() {
  const classes = useStyles();

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Sortable options={{
              group: "shared",
              animation: 550,
              ghostClass: 'widget-placeholder-react'
            }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget
              className={classes.widgetLayout}
              title="Draggable Grid"
            >
              <WidgsterInfo />
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget
              className={classes.widgetLayout}
              title="Default Widget"
            >
                {mock.mainData.default.map(item => (
                  <Typography key={item.value} component="p" gutterBottom>{item.value}</Typography>
                ))}
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget
              className={classes.widgetLayout}
              title="Latest Shares"
            >
              <SharesWidget />
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget
              className={classes.autoloadWidgetLayout}
              title="Autoload Widget"
            >
              <AutoloadWidget />
            </Widget>
          </Grid>
        </Sortable>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Sortable options={{
              group: "shared",
              animation: 550,
              ghostClass: 'widget-placeholder-react'
            }}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget
              className={classes.widgetLayout}
              title="News"
            >
              <NewsWidget />
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget
              className={classes.widgetLayout}
              title='Collapsed by default & locked'
            >
              <CollapsedWidget />
            </Widget>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <DraggableStory/>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Widget
              className={classes.loaderWidgetLayout}
              title="Custom Loader"
              disableWidgetMenu
            >
              <Loader />
            </Widget>
          </Grid>
        </Sortable>
      </Grid>
    </Grid>
  )
}

export default DraggableGrid;