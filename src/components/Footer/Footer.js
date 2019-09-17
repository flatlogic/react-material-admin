import React from "react";
import { Box } from '@material-ui/core'

const Footer = ({ children }) => {
  return (
    <Box mt={6} width={"100%"} display={"flex"}>
      {children}
    </Box>
  );
};

export default Footer;
