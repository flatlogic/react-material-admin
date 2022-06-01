import React from 'react';
import { Grid } from '@mui/material';
import { withRouter } from 'react-router-dom';

//components
import Widget from '../../../Widget';
import { Typography } from '../../../Wrappers';
import Code from '../../../Code';

const Pages = (props) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Widget disableWidgetMenu>
            <Typography
              variant={'h4'}
              style={{
                marginBottom: 15,
                marginTop: 10,
                color: 'rgb(110, 110, 110)',
              }}
            >
              Sidebar
            </Typography>
            <Typography style={{ marginBottom: 20 }}>
              Sidebar contains <Code inline>structure</Code> props. That means
              you can describe your own Sidebar structure in{' '}
              <Code inline>SidebarStructure.js</Code> file.
            </Typography>
            <Typography style={{ marginBottom: 8 }}>Code:</Typography>
            <Code inline row>
              {`<Sidebar structure={sidebarStructure} />`}
            </Code>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
};

export default withRouter(Pages);
