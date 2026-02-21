import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "./styles";

function VectorMap() {
  const classes = useStyles();
  return (
    <div className={classes.vectorContainer}>
      <Box
        sx={{
          border: "1px dashed",
          borderColor: "divider",
          borderRadius: 1,
          p: 3,
          textAlign: "center",
          bgcolor: "background.paper",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Vector Map Is Being Migrated
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The legacy map library was removed to keep React 19 compatibility.
          A modern vector map implementation will be connected in the next step.
        </Typography>
      </Box>
    </div>
  );
}

export default VectorMap;
