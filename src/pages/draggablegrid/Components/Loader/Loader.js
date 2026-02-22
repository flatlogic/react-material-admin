import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3.5rem',
      }}
    >
      <CircularProgress />
    </div>
  );
}

export default Loader;
