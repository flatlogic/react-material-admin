import React from 'react';
import {Grid, Box} from '@material-ui/core'

//components
import {Typography, Button } from '../../components/Wrappers'
import {Annotation} from '../../components/Timeline'
import PageTitle from '../../components/PageTitle'



export default function TimelineComp() {
  return (
    <>
    <PageTitle title="Timeline" />
    <Grid container spacing={6}>
    <Grid item md={12} xs={12}>
    <Annotation />
      <Annotation />
      <Annotation />
      <Annotation right />
    </Grid>
  </Grid>
      </>
  );
}