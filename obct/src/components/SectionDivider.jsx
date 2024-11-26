import React from "react";
import { Divider, Box, Typography } from "@mui/material";
import { PRIMARY_COLOR } from "../constant"; // Adjust path to where your constants are defined

const SectionDivider = ({ text }) => {
  return (
    <>
      <Divider
        sx={{
          width: "50%", // Divider width
          mx: "auto", // Center the divider
          borderColor: PRIMARY_COLOR,
          borderWidth: "4px", // Divider thickness
          mb: 4, // Spacing below the divider
        }}
      />
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", color: PRIMARY_COLOR }}
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default SectionDivider;
