import React from "react";
import { Box } from "@mui/material";

const HeroImage = ({ image }) => {
  return (
    <Box
      sx={{
        height: { xs: "30vh", md: "90vh" }, // Adjust height for responsiveness
        width: "100%", // Full width for responsiveness
        backgroundImage: `url(${image})`, // Use the image prop here
        backgroundSize: "cover", // Ensures the image covers the space
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        mb: 4, // Margin bottom
        padding: 0, // No padding
      }}
    />
  );
};

export default HeroImage;
