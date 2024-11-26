import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { PRIMARY_COLOR } from "../constant";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: PRIMARY_COLOR,  // Dark background color for the footer
        color: "white",  // White text color
        padding: "20px 0",  // Padding around the footer
        position: "relative", 
        bottom: 0, 
        width: "100%", 
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        {/* Footer content */}
        <Typography variant="body1" sx={{ marginBottom: "10px", color: "white",  fontStyle: "italic", fontSize: "1.2rem", fontFamily:"monospace", fontWeight: 900 }}>
            Kẻ làm con, hãy vâng lời cha mẹ theo tinh thần của Chúa, vì đó là điều phải đạo - (Ep 6,2-3)
        </Typography>
        
      </Container>
    </Box>
  );
};

export default Footer;
