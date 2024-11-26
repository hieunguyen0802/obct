import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { PRIMARY_COLOR } from "../constant";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Handle opening and closing the drawer
  const handleMenuOpen = () => {
    setOpen(true);
  };

  const handleMenuClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { name: "Gia đình", path: "/families" },
    { name: "Chuyện nhà tôi", path: "/stories" },
    { name: "Thư viện", path: "/libraries" },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: PRIMARY_COLOR }}>
      {" "}
      {/* Sky blue background */}
      <Toolbar>
        {/* Mobile Menu Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>

        {/* Site Title */}
        <Typography
          variant="h6"
          component={Link} // Use Link instead of div to make it clickable
          to="/" // Link to the home page
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", md: "left" },
            textDecoration: "none", // Remove underline
            color: "inherit", // Inherit the color from parent (AppBar)
            fontWeight: 900,
            fontFamily: "serif",
            fontSize: "1.5rem"
          }}
        >
          Đại Gia Đình OBCT
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {menuItems.map((item) => (
            <Button
              key={item.name}
              color="inherit"
              component={Link}
              to={item.path}
              sx={{ textTransform: "none", fontSize: "1.5rem", fontWeight: 900, fontFamily: "serif" }}
            >
              {item.name}
            </Button>
          ))}
        </Box>

        {/* Mobile Menu */}
        <Drawer
          anchor="top"
          open={open}
          onClose={handleMenuClose}
          variant="temporary"
          PaperProps={{
            sx: {
              width: "100vw", // Full width of the viewport
              height: "100vh", // Full height of the viewport
              display: "flex", // Use flexbox for layout
              flexDirection: "column", // Stack items vertically
              justifyContent: "center", // Vertically center the items
              alignItems: "center", // Horizontally center the items
              padding: 2, // Padding around the edges
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Reduced transparency (20% opacity)
              position: "relative", // Allow absolute positioning of close button
              background: "white",
            },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleMenuClose}
            sx={{
              position: "absolute",
              top: "16px",
              right: "16px",
              color: PRIMARY_COLOR, // Close icon color is skyblue
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Menu Items */}
          {menuItems.map((item) => (
            <Button
              key={item.name}
              component={Link}
              to={item.path}
              onClick={handleMenuClose}
              sx={{
                textTransform: "none",
                fontSize: "2rem", // Increased font size for mobile
                marginBottom: "1.5rem", // Space out items
                width: "80%", // Ensure buttons are wide enough
                textAlign: "center", // Center the text inside buttons
                color: PRIMARY_COLOR, // Text color is skyblue
              }}
            >
              {item.name}
            </Button>
          ))}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
