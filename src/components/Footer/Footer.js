import React from 'react';
import { Box } from '@mui/material';

const Footer = ({ children }) => {
  return (
    <Box
      mt={5}
      width='100%'
      display='flex'
      flexWrap='wrap'
      alignItems='center'
      position='absolute'
      bottom={0}
      justifyContent='space-between'
    >
      {children}
    </Box>
  );
};

export default Footer;
