import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Widget from '../../components/Widget';

const TypographyPage = (props) => (
  <Grid container spacing={32}>
    <Grid item xs={12} md={6}>
      <Widget title="Headings" upperTitle>
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
      </Widget>
    </Grid>
    <Grid item xs={12} md={6}>
      <Widget title="Content" upperTitle>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
          dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" gutterBottom>
          button text
        </Typography>
        <Typography variant="caption" gutterBottom>
          caption text
        </Typography>
        <Typography variant="overline" gutterBottom>
          overline text
        </Typography>
      </Widget>
    </Grid>
    <Grid item xs={12} md={6}>
      <Widget title="Typography Colors" upperTitle>
        <Typography variant="h4" color="error" gutterBottom>
          Error Color
        </Typography>
        <Typography variant="h4" color="primary" gutterBottom>
          Primary Color
        </Typography>
        <Typography variant="h4" color="secondary" gutterBottom>
          Secondary Color
        </Typography>
        <Typography variant="h4" color="textPrimary" gutterBottom>
          TextPrimary Color
        </Typography>
        <Typography variant="h4" color="textSecondary" gutterBottom>
          TextSecondary Color
        </Typography>
      </Widget>
    </Grid>
  </Grid>
);



export default TypographyPage;
