import React, { useState, useEffect } from 'react';
import { CircularProgress, Box, Grid } from '@mui/material';
import reactLogo from '../../images/react-logo.svg';
import {
  useManagementDispatch,
  useManagementState,
} from '../../context/ManagementContext';
// components
import Widget from '../../components/Widget';

const Dashboard = () => {
  const managementDispatch = useManagementDispatch();
  const managementValue = useManagementState();

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(managementValue.currentUser);
  }, [managementDispatch, managementValue]);

  if (!currentUser) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='100vh'
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <h1 className='page-title'>
        Welcome, {currentUser.firstName}! <br />
        <small>
          <small>Your role is {currentUser.role}</small>
        </small>
      </h1>
      <Grid container alignItems='center' columns={12} spacing={1}>
        <Grid item xs={2}>
          <Widget>
            <img src={reactLogo} alt='react' />
          </Widget>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
