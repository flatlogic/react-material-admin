import React from "react";
import { Box } from "@material-ui/core";

const Footer = ({ children }) => {
  return (
    <Box
      mt={5}
      width={"100%"}
      display={"flex"}
      alignItems={"center"}
      justifyContent="space-between"
    >
      {children}
    </Box>
  );
};

export default Footer;
