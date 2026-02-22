import React from 'react';
import { Grid, Typography } from '@mui/material';
import Widget from '../../components/Widget';
import { ReactSortable } from 'react-sortablejs';
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

const initialLeftWidgets = [
  { id: 'widgster-info' },
  { id: 'default-widget' },
  { id: 'latest-shares' },
  { id: 'autoload-widget' },
];

const initialRightWidgets = [
  { id: 'news-widget' },
  { id: 'collapsed-widget' },
  { id: 'draggable-story' },
  { id: 'custom-loader' },
];

function renderWidget(widgetId, classes) {
  switch (widgetId) {
    case 'widgster-info':
      return (
        <Grid key={widgetId} size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Widget className={classes.widgetLayout} title="Draggable Grid">
            <WidgsterInfo />
          </Widget>
        </Grid>
      );
    case 'default-widget':
      return (
        <Grid key={widgetId} size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Widget className={classes.widgetLayout} title="Default Widget">
            {mock.mainData.default.map((item) => (
              <Typography key={item.value} component="p" gutterBottom>
                {item.value}
              </Typography>
            ))}
          </Widget>
        </Grid>
      );
    case 'latest-shares':
      return (
        <Grid key={widgetId} size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Widget className={classes.widgetLayout} title="Latest Shares">
            <SharesWidget />
          </Widget>
        </Grid>
      );
    case 'autoload-widget':
      return (
        <Grid key={widgetId} size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Widget className={classes.autoloadWidgetLayout} title="Autoload Widget">
            <AutoloadWidget />
          </Widget>
        </Grid>
      );
    case 'news-widget':
      return (
        <Grid key={widgetId} size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Widget className={classes.widgetLayout} title="News">
            <NewsWidget />
          </Widget>
        </Grid>
      );
    case 'collapsed-widget':
      return (
        <Grid key={widgetId} size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Widget className={classes.widgetLayout} title="Collapsed by default & locked">
            <CollapsedWidget />
          </Widget>
        </Grid>
      );
    case 'draggable-story':
      return (
        <Grid key={widgetId} size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <DraggableStory />
        </Grid>
      );
    case 'custom-loader':
      return (
        <Grid key={widgetId} size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Widget className={classes.loaderWidgetLayout} title="Custom Loader" disableWidgetMenu>
            <Loader />
          </Widget>
        </Grid>
      );
    default:
      return null;
  }
}

function DraggableGrid() {
  const classes = useStyles();
  const [leftWidgets, setLeftWidgets] = React.useState(initialLeftWidgets);
  const [rightWidgets, setRightWidgets] = React.useState(initialRightWidgets);

  return (
    <Grid container spacing={4} className={classes.root}>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <ReactSortable
          list={leftWidgets}
          setList={setLeftWidgets}
          group="shared"
          animation={550}
          ghostClass="widget-placeholder-react"
        >
          {leftWidgets.map(({ id }) => renderWidget(id, classes))}
        </ReactSortable>
      </Grid>
      <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <ReactSortable
          list={rightWidgets}
          setList={setRightWidgets}
          group="shared"
          animation={550}
          ghostClass="widget-placeholder-react"
        >
          {rightWidgets.map(({ id }) => renderWidget(id, classes))}
        </ReactSortable>
      </Grid>
    </Grid>);

}

export default DraggableGrid;
