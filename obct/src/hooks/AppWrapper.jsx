import React from "react";
import { Box } from "@mui/material";

const AppWrapper = ({ children }) => {
  return (
    <Box
      sx={{
        maxWidth: "1920px", // Maximum width for a 24-inch monitor
        margin: "0 auto", // Center content horizontally
        width: "100%", // Allow responsiveness
      }}
    >
      {children}
    </Box>
  );
};

export default AppWrapper;
